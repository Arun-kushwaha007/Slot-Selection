import Batch from '../models/Batch.js';
import mongoose from 'mongoose';

// Other controller functions...

export const Addbatch = async (req, res) => {
    const postbatchdata = req.body;
    const userid = req.userid;
    const postbatch = new Batch({ ...postbatchdata, userid });
    try {
        await postbatch.save();
        res.status(200).json("Posted a Batch successfully");
    } catch (error) {
        console.log(error);
        res.status(404).json("couldn't post a new Batch");
    }
};

export const getallbatch = async (req, res) => {
    try {
        const batchlist = await Batch.find().sort({ askedon: -1 });
        res.status(200).json(batchlist);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

export const deletebatch = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Batch unavailable...");
    }
    try {
        await Batch.findByIdAndDelete(_id);
        res.status(200).json({ message: "Successfully deleted..." });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const votebatch = async (req, res) => {
    const { id: _id } = req.params;
    const { value } = req.body;
    const userid = req.userid;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Batch unavailable...");
    }
    try {
        const batch = await Batch.findById(_id);
        const upindex = batch.upvote.findIndex((id) => id === String(userid));
        const downindex = batch.downvote.findIndex((id) => id === String(userid));
        if (value === "upvote") {
            if (downindex !== -1) {
                batch.downvote = batch.downvote.filter((id) => id !== String(userid));
            }
            if (upindex === -1) {
                batch.upvote.push(userid);
            } else {
                batch.upvote = batch.upvote.filter((id) => id !== String(userid));
            }
        } else if (value === "downvote") {
            if (upindex !== -1) {
                batch.upvote = batch.upvote.filter((id) => id !== String(userid));
            }
            if (downindex === -1) {
                batch.downvote.push(userid);
            } else {
                batch.downvote = batch.downvote.filter((id) => id !== String(userid));
            }
        }
        await Batch.findByIdAndUpdate(_id, batch);
        res.status(200).json({ message: "Voted successfully.." });
    } catch (error) {
        res.status(404).json({ message: "ID not found" });
    }
};

export const joinBatch = async (req, res) => {
    const { id } = req.params;
    const { userid, userjoined } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("Batch unavailable...");
    }

    try {
        const batch = await Batch.findById(id);

        if (!batch) return res.status(404).json({ message: "Batch not found" });

        const hasJoined = batch.join.some((join) => join.userid === userid);

        if (hasJoined) {
            return res.status(400).json({ message: "User already joined this batch." });
        }

        batch.join.push({ userid, userjoined });
        batch.noofjoins += 1;

        const updatedBatch = await Batch.findByIdAndUpdate(id, batch, { new: true });

        res.status(200).json(updatedBatch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

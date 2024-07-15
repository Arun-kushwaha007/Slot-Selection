import Batch from "../models/Batch.js";
// import Batch from "../models/Batch.js";
import mongoose from "mongoose";

export const Addbatch = async (req, res) => {
    const postbatchdata = req.body;
    const userid = req.userid;
    const postbatch = new Batch({ ...postbatchdata, userid })
    console.log("Post Batch Data: ", postbatchdata);
    try {
        await postbatch.save();
        res.status(200).json("Posted a Batch successfully");
    } catch (error) {
        console.log(error)
        res.status(404).json("couldn't post a new Batch");
        return
    }
};

export const getallbatch = async (req, res) => {
    try {
        const batchlist = await Batch.find().sort({ askedon: -1 });
        res.status(200).json(batchlist)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
        return
    }
};

export const deletebatch = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Batch unavailable...");
    }
    try {
        await Batch.findByIdAndDelete(_id);
        res.status(200).json({ message: "successfully deletd..." })
    } catch (error) {
        res.status(404).json({ message: error.message });
        return
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
        const upindex = batch.upvote.findIndex((id) => id === String(userid))
        const downindex = batch.downvote.findIndex((id) => id === String(userid))
        if (value === "upvote") {
            if (downindex !== -1) {
                batch.downvote = batch.downvote.filter((id) => id !== String(userid))
            }
            if (upindex === -1) {
                batch.upvote.push(userid);
            } else {
                batch.upvote = batch.upvote.filter((id) => id !== String(userid))
            }
        } else if (value === "downvote") {
            if (upindex !== -1) {
                batch.upvote = batch.upvote.filter((id) => id !== String(userid))
            }
            if (upindex === -1) {
                batch.downvote.push(userid);
            } else {
                batch.downvote = batch.downvote.filter((id) => id !== String(userid))
            }
        }
        await batch.findByIdAndUpdate(_id, batch);
        res.status(200).json({ message: "voted successfully.." })

    } catch (error) {
        res.status(404).json({ message: "id not found" });
        return
    }
}
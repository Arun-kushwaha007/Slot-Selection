import mongoose from "mongoose";
import batch from "../models/Batch.js";

export const postjoin=async(req,res)=>{
    const {id:_id}=req.params;
    const {noofjoins,joinbody,userjoined}=req.body;
    const userid=req.userid;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("batch unavailable...");
    }
    updatenoofbatch(_id,noofjoins);
    try {
        const updatebatch=await batch.findByIdAndUpdate(_id,{
            $addToSet:{join:[{joinbody,userjoined,userid}]},
        });
        res.status(200).json(updatebatch)
    } catch (error) {
        res.status(404).json({ message: "error in uploading" });
        return
    }
};
const updatenoofbatch=async(_id,noofjoins)=>{
    try {
        await batch.findByIdAndUpdate(_id,{
            $set:{noofjoins:noofjoins},
        });

    } catch (error) {
        console.log(error)
    }
}

export const deletejoin=async(req,res)=>{
    const {id:_id}=req.params;
    const {joinid,noofjoins}=req.body;
    // console.log(_id,joinid,noofjoins)
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("batch unavailable...");
    }
    if (!mongoose.Types.ObjectId.isValid(joinid)) {
        return res.status(404).send("join unavailable...");
    }
    updatenoofbatch(_id,noofjoins);
    try {
        await batch.updateOne(
            {_id},
            {$pull:{join:{_id:joinid}}}
        );
        res.status(200).json({message:"successfully deleted.."})
    } catch (error) {
        res.status(404).json({ message: "error in deleting.." });
        return
    }
}
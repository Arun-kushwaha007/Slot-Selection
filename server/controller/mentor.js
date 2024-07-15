import mongoose from "mongoose"
// import users from '../models/auth.js'
import Mentor from "../models/authmentor.js"

export const getallmentor = async (req, res) => {
    try {
        const allmentor = await Mentor.find()
        const allmentordetails = [];
        allmentor.forEach((Mentor) => {
            allmentordetails.push({_id:Mentor._id,
                name:Mentor.name,
                about:Mentor.about,
                tags:Mentor.tags,
                joinedon:Mentor.joinedon,
            });     
        });
        res.status(200).json(allmentordetails)
    } catch (error) {
        res.status(404).json({message:error.message})
        return
    }
}
// export const updateprofile=async(req,res)=>{
//     const{id:_id}=req.params;
//     const {name,about,tags}=req.body;
//     if(!mongoose.Types.ObjectId.isValid(_id)){
//         return res.status(404).send("user unavailable");
//     }
//     try {
//         const updateprofile=await Mentor.findByIdAndUpdate(_id,{$set:{name:name,about:about,tags:tags}},
//             {new:true}
//         );
//         res.status(200).json(updateprofile)
//     } catch (error) {
//         res.status(404).json({message:error.message})
//         return
//     }
// }
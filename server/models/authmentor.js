import mongoose from "mongoose";
 const mentorschema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    about:{type:String},
    tags:{type:[String]},
    joinedon:{type:Date,default:Date.now}
 })

 export default mongoose.model("Mentor",mentorschema)
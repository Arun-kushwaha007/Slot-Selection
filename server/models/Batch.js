import mongoose from "mongoose";

const Batchschema = mongoose.Schema({
    batchtitle: { type: String, required: "batch must have a title" },
    batchbody: { type: String, required: "batch must have a body" },
    batchtags: { type: [String], required: "batch must have tags" },
    noofjoins: { type: Number, default: 0 },
    maxStudents: { type: Number, required: "batch must have a maximum number of students" }, // Added this field
    upvote: { type: [String], default: [] },
    downvote: { type: [String], default: [] },
    userposted: { type: String, required: "batch must have an author" },
    userid: { type: String },
    askedon: { type: Date, default: Date.now },
    startdatetime: { type: Date, required: "batch must have a start date and time" },
    enddatetime: { type: Date, required: "batch must have an end date and time" },
    join: [
        {
            joinbody: String,
            userjoined: String,
            userid: String,
            joinedon: { type: Date, default: Date.now }
        },
    ],
});

export default mongoose.model("Batch", Batchschema);

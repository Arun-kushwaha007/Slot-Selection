import express from "express"
import { Addbatch,getallbatch,deletebatch,votebatch } from "../controller/Batch.js"

// import auth from "../middleware/auth.js"
import authmentor from "../middleware/authmentor.js";

const router=express.Router();

router.post('/Add',authmentor,Addbatch);
router.get('/get',getallbatch);
router.delete("/delete/:id",authmentor,deletebatch);
router.patch("/vote/:id",authmentor,votebatch)


export default router;
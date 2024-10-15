import express from "express"
import { postjoin,deletejoin } from "../controller/join.js";
import auth from "../middleware/auth.js";
const router=express.Router();
router.patch("/post/:id",auth,postjoin);
router.patch("/delete/:id",auth,deletejoin);

export default router;
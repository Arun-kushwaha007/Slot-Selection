import express from "express"
import  {mentorlogin,mentorsignup} from '../controller/authmentor.js'
// import  {login,signup} from '../controller/auth.js'
import { getallusers,updateprofile } from "../controller/users.js";
// import auth from "../middleware/auth.js"
import authmentor from "../middleware/authmentor.js";

const router=express.Router();

router.post("/mentorsignup",mentorsignup);
router.post("/mentorlogin",mentorlogin);

router.get("/getallusers",getallusers)

router.patch("/update/:id",authmentor,updateprofile)


export default router
// import users from '../models/auth.js'
import Mentor from "../models/authmentor.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const mentorsignup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const extingmentor = await Mentor.findOne({ email });
        if (extingmentor) {
            return res.status(404).json({ message: "User already exist" });
        }
        const hashedpassword = await bcrypt.hash(password, 12);
        const newmentor = await Mentor.create({
            name,
            email,
            password: hashedpassword
        });
        const token = jwt.sign({
            email: newmentor.email, id: newmentor._id
        }, process.env.JWT_SECRET, { expiresIn: "1h" }
        )
        res.status(200).json({ result: newmentor, token });
    } catch (error) {
        res.status(500).json("something went wrong...")
        return
    }
}

export const mentorlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const extingmentor = await Mentor.findOne({ email });
        if (!extingmentor) {
            return res.status(404).json({ message: "User does not exists" })
        }
        const ispasswordcrct = await bcrypt.compare(password, extingmentor.password);
        if (!ispasswordcrct) {
            res.status(400).json({ message: "Invalid credentiasl" });
            return
        }
        const token = jwt.sign({
            email: extingmentor.email, id: extingmentor._id
        }, process.env.JWT_SECRET, { expiresIn: "1h" }
        )

        res.status(200).json({ result: extingmentor, token })
    } catch (error) {
        res.status(500).json("something went wrong...")
        return
    }
}
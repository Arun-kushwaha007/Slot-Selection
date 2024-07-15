import { OAuth2Client } from 'google-auth-library';
import users from '../models/auth.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

export const signup = async (req, res) => {
  const { name, email, password, googleId, googleToken } = req.body;

  try {
    let user = await users.findOne({ email });

    if (user && !googleId) {
      return res.status(404).json({ message: "User already exists" });
    }

    if (googleId) {
      if (!user) {
        user = await users.create({ name, email, googleId });
      }

      const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      return res.status(200).json({ result: user, token });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      user = await users.create({ name, email, password: hashedPassword });
      const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(200).json({ result: user, token });
    }
  } catch (error) {
    res.status(500).json("Something went wrong...");
  }
};

export const login = async (req, res) => {
  const { email, password, googleToken } = req.body;

  try {
    let user = await users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    if (googleToken) {
      const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      if (payload.email !== email) {
        return res.status(400).json({ message: "Invalid Google token" });
      }

      const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      return res.status(200).json({ result: user, token });
    } else {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(200).json({ result: user, token });
    }
  } catch (error) {
    res.status(500).json("Something went wrong...");
  }
};

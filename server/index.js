import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userroutes from "./routes/user.js";
import batchroutes from "./routes/batch.js";
import joinroutes from "./routes/join.js";
import mentorRoutes from "./routes/mentor.js";

const app = express();
dotenv.config();

// Update CORS to allow multiple origins
const allowedOrigins = [
  "http://localhost:3000", // Local development
  "https://slot-selection-1wkgzytnh-arunkushwaha007s-projects.vercel.app" // Vercel frontend
];

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error(`CORS policy does not allow access from origin ${origin}`));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use("/user", userroutes);
app.use('/mentor', mentorRoutes);
app.use('/batches', batchroutes);
app.use('/join', joinroutes);

app.get('/', (req, res) => {
  res.send("Codequest is running perfect");
});

const PORT = process.env.PORT || 5000;
const database_url = process.env.MONGODB_URL;

mongoose.connect(database_url)
  .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`); }))
  .catch((err) => console.log(err.message));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import batchRoutes from "./routes/batch.js";
import joinRoutes from "./routes/join.js";
import mentorRoutes from "./routes/mentor.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// CORS Configuration
const allowedOrigins = [
    "https://slot-selection.vercel.app" ,
//   "http://localhost:3000" // Local frontend URL for development
  // Deployed frontend URL on Vercel
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// Routes
app.use("/user", userRoutes);
app.use("/mentor", mentorRoutes);
app.use("/batches", batchRoutes);
app.use("/join", joinRoutes);

// Health Check Endpoint
app.get("/", (req, res) => {
  res.send("Codequest is running perfectly");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Database and Server Initialization
const PORT = process.env.PORT || 5000;
const databaseURL = process.env.MONGODB_URL;

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(`Database connection error: ${err.message}`));

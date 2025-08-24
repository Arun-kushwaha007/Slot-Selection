import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Import routes
import userRoutes from "./routes/user.js";
import batchRoutes from "./routes/batch.js";
import joinRoutes from "./routes/join.js";
import mentorRoutes from "./routes/mentor.js";

const app = express();

// Middleware for JSON parsing
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// ✅ Improved CORS handling
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://slot-selection-final.onrender.com",
  "https://slot-selection.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("❌ CORS blocked origin:", origin);
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Routes
app.use("/user", userRoutes);
app.use("/mentor", mentorRoutes);
app.use("/batches", batchRoutes);
app.use("/join", joinRoutes);

// ✅ Serve static files (React frontend)
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Internal Server Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Connect to database and start server
const PORT = process.env.PORT || 5000;
const databaseURL = process.env.MONGODB_URL;

// Debug log
console.log("📦 Connecting to:", databaseURL);

mongoose.connect(databaseURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ Database connection error:", err.message);
  });

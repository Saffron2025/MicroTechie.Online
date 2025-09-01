// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");




const contactRouter = require("./routes/contact.routes");

dotenv.config();
const app = express();

// Parsers + security
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// 🔎 Global logger
app.use((req, _, next) => {
  console.log(`➡️  ${req.method} ${req.url}`);
  next();
});

// CORS (TEMP: wide-open test; kaam ho jaye to restrict kar dena)
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { dbName: "microtechie" })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err.message));

// Routes
app.use("/api/contact", contactRouter);



// Health
app.get("/health", (_, res) => res.json({ ok: true }));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`🚀 Server running at http://localhost:${port}`)
);

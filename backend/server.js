const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");
const billingRoutes = require("./routes/billingRoutes.js");
const cors = require("cors");   // <--- add this

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Allow requests from frontend (localhost:3000)
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/auth", authRoutes);
app.use("/api/billing", billingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

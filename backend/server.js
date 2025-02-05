import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import propertyRoutes from "./routes/property.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows use of JSON data in the req.body

app.use("/api/properties", propertyRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started on http://localhost:${PORT}`);
})
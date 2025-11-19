import express from "express";

import cors from "cors";

import "dotenv/config";
import ConnectDB from "./config/dbconfig.js";

//Import Routes:
import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoute.js";
import petRoute from "./Routes/petRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5500;

//middlewares:-
app.use(
  cors({
    origin: ["https://happy-tails-iota.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ConnectDB();

//Apis:-
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/petRoute", petRoute);
app.use("/uploads", express.static("uploads"));

//Listen:-
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

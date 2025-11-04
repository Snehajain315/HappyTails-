import express from "express";

import cors from "cors";
import bodyParser from "body-parser";

import "dotenv/config";
import ConnectDB from "./config/dbconfig.js";

//Import Routes:
import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoute.js";
import petRoute from "./Routes/petRoute.js";


const app = express();
const PORT= process.env.PORT || 5500;

 console.log("heyy")
        console.log("USER:", process.env.EMAIL_USER);
        console.log("PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Not loaded ❌");

//middlewares:-
app.use(cors({
  origin: ["https://happy-tails-iota.vercel.app" , "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(bodyParser.json());

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

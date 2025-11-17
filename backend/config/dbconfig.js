import mongoose from "mongoose";
import 'dotenv/config'

let mongoURI= process.env.MONGODB_URI;

export default function ConnectDB()
{
    mongoose.connect(mongoURI)
    .then(()=>console.log("MongoDB Connected"));
}
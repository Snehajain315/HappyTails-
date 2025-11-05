import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  name: { type: String, require: true },

  age: { type: Number, require: true },

  email: { type: String, require: true, unique: true },

  password: { type: String, require: true },

  profilePicture: {
    type: String,
    default: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
    require: true,
  },

  role: { type: String, enum: ["admin", "user"], default: "user" },

  resetToken: String,

  resetTokenExpiry: Date,
});

export default mongoose.model("userModel", userSchema);
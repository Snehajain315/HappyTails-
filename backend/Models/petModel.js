import mongoose from "mongoose";

let petSchema = new mongoose.Schema({

  poster: {type : String },

  name: { type: String, require: true },

  category: { type: String, require: true },

  breed: { type: String, require: true },

  age: { type: Number, require: true },

  gender: {
    type: String, require: true,
    enum: ["male", "female", "unknown"],
  },

  color: { type: String },

  price: {type: Number, require: true}
});

export default mongoose.model("petModel", petSchema);

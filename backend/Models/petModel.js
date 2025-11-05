import mongoose from "mongoose";

let petSchema= new mongoose.Schema({

   name:{type: String, require: true},

   category:{type:String,  require: true},

   breed:{type:String,  require: true},

   age:{type:Number, require:true},

   gender:{enum:['male', 'female', 'unknown']},

   color:{type: String}
   
})

export default mongoose.model('petModel', petSchema);
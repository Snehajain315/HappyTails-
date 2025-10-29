import mongoose from "mongoose";

let productSchema = new mongoose.Schema({

    poster:{type:String, required:true},

    name: {type:String , required:true},
    
    description:{type:String, required:true},

    price:{type:Number, required:true},

    brand:{type:String, required:true},

    weight:{
        value:{type:Number, required: true},
        unit: {type:String, enum:['kg','g','lbs','oz','ml'], default:'kg'}
    },

    category:{
        type:String, required:true, 
        enum:[
            "pets-food",
            "toys-accessories",
            "pets",
            "health-wellness",
            "pet-clothing",
            "beds-furniture"
      ]
    }
});


export default mongoose.model('productModel', productSchema);

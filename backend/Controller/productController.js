import productModel from '../Models/productModel.js'


let productController= {

    async getAllProducts(req,res){
    try{
        let Products= await productModel.find({}).limit().skip()
        res.status(200).json(Products);
    }
    catch(err){
        res.status(500).json({message: err})
        return;
    }     
    },

    async getProductById(req,res){
        try{
            let Product= await productModel.findById(req.params.id)
            res.status(200).json(Product);
        }
        catch(err){
            res.status(500).json({message: err})
            return;
        }
    },

    async addProduct(req,res){
        try{
            let CreateProduct= new productModel(req.body);
            await CreateProduct.save();
            res.status(201).json({data: CreateProduct,message: "Product added Successfully"})
        }
        catch(err){
            res.status(500).json({message: err})
            return;
        }
    },

    async updateProduct(req,res){
        try{
            let ChangeProduct= await productModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
            if(!ChangeProduct){
                res.status(500).json({message:"Course not found!"})
            }
            res.status(201).json({data:ChangeProduct, message:"Product updated successfully"})
        }
        catch(err){
            res.status(500).json({message:err})
        }
    }, 

    async deleteProduct(req,res){
        try{
            let DelProduct= await productModel.findByIdAndDelete(req.params.id)
            if(!DelProduct){
                res.status(500).json({message:"Product not found!"})
            }
            res.status(201).json({message: "Data deleted Successfully"})
        }
        catch(err){
            res.status(500).json({message:err})
        }
    }
};


export default productController;
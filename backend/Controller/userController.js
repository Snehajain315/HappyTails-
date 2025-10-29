import userModel from '../Models/userModel.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

let userController={
    
    async getAllUsers(req,res){
        try{
          let Users= await userModel.find({});
          res.status(201).json(Users);
        }
        catch(err){
          res.status(500).json({message:err.message})
          return;
        }
    },


    async getUserById(req,res){
        try{
            let User= await userModel.findById(req.params.id);
            res.status(201).json(User)
        }
        catch(err){
            res.status(500).json({message:err.message})
            return;
        }
    },


    //User Login Code:

    async loginUser(req,res){
       let {email,password}= req.body;
       try{
        let user= await userModel.findOne({email})
        if(!user){
            res.status(404).json({message: 'User not found'})
            return;
        }

        //Check password
        let validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            res.status(401).json({message:'Invalid Password'})
            return;
        }

        //Jwt token:
        const token= jwt.sign({id:user.id}, process.env.SECRET_KEY, {expiresIn:'30d'})
        res.status(201).json({token, user});
       }
       catch(err){
        res.status(500).json({message:err.message})
        return;
       }
    },



    //Create new user code:

    async signupUser(req,res)
    {
       let {name,age, email, password, role}= req.body;

       const profilePicture= req.file? `uploads/${req.file.filename}`:null;

       const newUser= new userModel({
        name, age, email,
        password: await bcrypt.hash(password, 10),
        profilePicture, role
       })

       try{
        let saveUser= await newUser.save();
        let Res= {
            token: jwt.sign({id:newUser.id},process.env.SECRET_KEY,{expiresIn:'30d'}),
            user: saveUser
        }
        res.status(201).json(Res);
       }
       catch(err){
        res.status(500).json({message:err.message})
       }
    },


    

    async updateUser(req,res){
        try{
            let updateUserData= await userModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
            if(!updateUserData){
                res.status(500).json({message: 'User not found!'})
            }
            res.status(201).json({updateUserData, message:'User Updated Successfully'})
        }
        catch(err){
            res.status(500).json({message: err.message})
            return;
        }
    },



    async removeUser(req,res){
        try{
            let deleteUserData= await userModel.findByIdAndDelete(req.params.id)
            if(!deleteUserData){
                res.status(500).json({message:'User not found'})
            }
            res.status(201).json({message:"User deleted successfully"})
        }
        catch(err){
            res.status(500).json({message: err.message})
            return;
        }
    }

}

export default userController;
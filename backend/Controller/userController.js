import userModel from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import crypto from 'crypto';
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import "dotenv/config";

const userController = {
  async getAllUsers(req, res) {
    try {
      const Users = await userModel.find({});
      res.status(201).json(Users);
    } catch (err) {
      res.status(500).json({ message: err.message });
      return;
    }
  },

  async getUserById(req, res) {
    try {
      const User = await userModel.findById(req.params.id);
      res.status(201).json(User);
    } catch (err) {
      res.status(500).json({ message: err.message });
      return;
    }
  },

  //User Login Code:

  async loginUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      //Check password
      const validPassword = await bcryptjs.compare(password, user.password);
      if (!validPassword) {
        res.status(401).json({ message: "Invalid Password" });
        return;
      }

      //Jwt token:
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      res.status(201).json({ token, user });
    } catch (err) {
      res.status(500).json({ message: err.message });
      return;
    }
  },

  //forgot-password: 
  async forgotPassword(req, res){
   const {email} = req.body;
   try{
    const user= await userModel.findOne({email})
    if(!user)
      return res.status(400).json({message: "User not found with this email"});

    //Generate random token
    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = token;
    user.resetTokenExpiry= Date.now() + 3600000;
    await user.save();

    const resetLink= `http://localhost:5173/reset-password/${token}`

    //send email
    await sendEmail(
      user.email,
      "password reset link",
      `<p>Click below to reset your password: </p>
      <a href= "${resetLink}"> ${resetLink}</a>
      `
    );

    res.json({message: "Password link sent to your email"})
   }
   catch(err){
    res.status(500).json({message: err.message})
   }
  },

  //Create new user code:
  async signupUser(req, res) {
    const { name, age, email, password, role } = req.body;

    const profilePicture = req.file ? `uploads/${req.file.filename}` : null;
    const newUser = new userModel({
      name,
      age,
      email,
      password: await bcryptjs.hash(password, 10),
      profilePicture,
      role,
    });

    try {
      const saveUser = await newUser.save();
      const Res = {
        token: jwt.sign({ id: newUser.id }, process.env.SECRET_KEY, {
          expiresIn: "30d",
        }),
        user: saveUser,
      };
      res.status(201).json({ Res, message: "Account created successfully" });
    } catch (err) {
      if (err.code === 11000) {
        return res
          .status(400)
          .json({ message: "User already exists with this email" });
      }
      res.status(500).json({ message: err.message || "Something went wrong!" });
    }
  },

  async updateUser(req, res) {
    try {
      const updateUserData = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updateUserData) {
        res.status(500).json({ message: "User not found!" });
      }
      res
        .status(201)
        .json({ updateUserData, message: "User Updated Successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
      return;
    }
  },

  async removeUser(req, res) {
    try {
      const deleteUserData = await userModel.findByIdAndDelete(req.params.id);
      if (!deleteUserData) {
        res.status(500).json({ message: "User not found" });
      }
      res.status(201).json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
      return;
    }
  },
};

export default userController;

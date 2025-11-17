import userModel from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import { OAuth2Client } from "google-auth-library";
import "dotenv/config";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper: Generate JWT token
const generateToken = (id) =>
  jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "30d" });

// Helper: Error handler
const handleError = (res, error) => {
  res.status(500).json({ message: error.message || "Server Error" });
};

const userController = {

  // Get All Users
  async getAllUsers(req, res) {
    try {
      const users = await userModel.find({});
      res.status(200).json(users);
    } catch (err) {
      handleError(res, err);
    }
  },

// Get User by ID
  async getUserById(req, res) {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (err) {
      handleError(res, err);
    }
  },

  // User Login
  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userModel.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });

      const validPassword = await bcryptjs.compare(password, user.password);
      if (!validPassword)
        return res.status(401).json({ message: "Invalid password" });

      const token = generateToken(user._id);
      res.status(200).json({ token, user });
    } catch (err) {
      handleError(res, err);
    }
  },

// Forgot Password
  async forgotPassword(req, res) {
    const { email } = req.body;

    try {
      const user = await userModel.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });

      const token = crypto.randomBytes(32).toString("hex");

      user.resetToken = token;
      user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
      await user.save();

      const resetLink = `http://localhost:5173/reset-password/${token}`;

      await sendEmail(
        user.email,
        "Password Reset Link",
        `<p>Click to reset your password:</p>
         <a href="${resetLink}">${resetLink}</a>`
      );

      res.json({ message: "Password reset link sent to your email" });
    } catch (err) {
      handleError(res, err);
    }
  },

// Reset Password
  async resetPassword(req, res) {
    const { token } = req.params;
    const { password } = req.body;

    try {
      const user = await userModel.findOne({
        resetToken: token,
        resetTokenExpiry: { $gt: Date.now() },
      });

      if (!user)
        return res.status(400).json({ message: "Invalid or expired token" });

      user.password = await bcryptjs.hash(password, 10);
      user.resetToken = undefined;
      user.resetTokenExpiry = undefined;

      await user.save();
      res.json({ message: "Password reset successful!" });
    } catch (err) {
      handleError(res, err);
    }
  },

// Signup User 
  async signupUser(req, res) {
    const { name, age, email, password, role } = req.body;

    try {
      const hashedPassword = await bcryptjs.hash(password, 10);

      const profilePicture = req.file ? `uploads/${req.file.filename}` : null;

      const user = await userModel.create({
        name,
        age,
        email,
        password: hashedPassword,
        profilePicture,
        role,
      });

      const token = generateToken(user._id);

      res.status(201).json({
        message: "Account created successfully",
        token,
        user,
      });
    } catch (err) {
      if (err.code === 11000) {
        return res
          .status(400)
          .json({ message: "User already exists with this email" });
      }
      handleError(res, err);
    }
  },

// Google Sign-in
  async googleSignIn(req, res) {
    try {
      const { credential } = req.body;

      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const { email, name, picture } = payload;

      let user = await userModel.findOne({ email });

      if (!user) {
        user = await userModel.create({
          name,
          email,
          profilePicture: picture,
          password: "GOOGLE_AUTH",
        });
      }

      const token = generateToken(user._id);

      res.json({ success: true, token, user });
    } catch (err) {
      res.status(500).json({ success: false, message: "Google login failed" });
    }
  },

// Update User
  async updateUser(req, res) {
    try {
      const updated = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!updated) return res.status(404).json({ message: "User not found" });

      res.status(200).json({
        message: "User updated successfully",
        updated,
      });
    } catch (err) {
      handleError(res, err);
    }
  },

// Delete User
  async removeUser(req, res) {
    try {
      const deleted = await userModel.findByIdAndDelete(req.params.id);

      if (!deleted) return res.status(404).json({ message: "User not found" });

      res.json({ message: "User deleted successfully" });
    } catch (err) {
      handleError(res, err);
    }
  },
};

export default userController;

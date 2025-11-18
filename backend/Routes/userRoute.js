import { Router } from "express";
import path from "path";
import multer from "multer";
import userController from "../Controller/userController.js";
import { sendEmail } from "../utils/sendEmail.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
const router = Router();

router.get("/", userController.getAllUsers);

router.get("/test-email", async (req, res) => {
  try {
    await sendEmail(
      "sj030105@gmail.com",
      "<h1>Test Email</h1>",
      "Test Subject"
    );
    res.send("Email sent successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", userController.getUserById);

router.post("/login", userController.loginUser);

router.post(
  "/signup",
  upload.single("profilePicture"),
  userController.signupUser
);

router.post("/forgot-password", userController.forgotPassword);

router.post("/reset-password", userController.resetPassword);

router.post("/auth/google", userController.googleSignIn);

router.put("/update/:id", userController.updateUser);

router.delete("/delete/:id", userController.removeUser);



export default router;

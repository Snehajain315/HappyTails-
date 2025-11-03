import nodemailer from "nodemailer";
import 'dotenv/config'

export const sendEmail = async(to, htmlContent, subject)=>{
    const transporter= nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to, 
        subject,
        html: htmlContent,
    }

    await transporter.sendMail(mailOptions)
}


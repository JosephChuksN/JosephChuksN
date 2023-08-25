import type { NextApiResponse } from "next"
import nodemailer from "nodemailer"


export async function POST(req:Request, res:NextApiResponse) {
  const response = await req.json();
  console.log(response)
  const  { name, email, message} = response;
  
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
      service: process.env.MAIL_SERVICE,
      secure: true,
    });

    const mailData = {
      from: email,
      to: process.env.USER_EMAIL,
      subject: `Message from ${name}`,
      html: `<p>${message}<br> <p>sent from ${email}</p></p>`,
    };

   const mail = await transporter.sendMail(mailData);
   console.log("mail:", mail)
    return res.status(200).json({message:"success"});
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
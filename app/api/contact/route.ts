
import type { NextApiRequest, NextApiResponse } from "next"

export default async (res: NextApiResponse, req:NextApiRequest) => {
    const nodemailer = require("nodemailer")
    const { name, email, message } = req.body
    const transporter = nodemailer.createTransport({
        port:465,
        host:"smtp.gmail.com",
        auth: {
            user:"hellonwosu@gmail.com",
            pass:"sbnssjxjgigmsvgd"
        },
        secure: true
    })

    const mailData = {
        from: email,
        to: "hellonwosu@gmail.com",
        subject:`Message from ${email}`,
        text:`${message} sent from ${email}`,
        html: `<p>${message}<br> <p>sent from ${email}</p></p>`
    }

   await transporter.sendMail(mailData, function (err: Error, info:any) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
    
}
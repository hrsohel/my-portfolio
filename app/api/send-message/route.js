import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.formData();
  try {
    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      // port: 587,
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: body.get("email"),
      to: process.env.USER_EMAIL,
      subject: `${body.get("subject")}`,
      html: `<div style="border: 1px solid black; padding: 1rem">
              <p style="font-size: .8rem">Name: ${body.get("name")}</p>
              <p style="font-size: .8rem">Email: ${body.get("email")}</p>
              <p style="font-size: .8rem;">${body.get("message")}</p>
            </div>`,
    };
    // transporter.sendMail(mailOptions, (err, result) => {
    //   if (!err) {
    //     console.log(`Email sent ${result.response}`);
    //     return NextResponse.json({ message: "Your email sent" });
    //   } else {
    //     console.log(err.message);
    //   }
    // });
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(`Email sent ${info.response}`);
          resolve(info);
        }
      });
    });
    return NextResponse.json({ message: "Your email sent" });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: "Failed to send message" });
  }
}

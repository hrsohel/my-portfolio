import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import User from "@/schemas/User";
import { uploadImage } from "@/controllers/uploadImage";
import fs from "fs";

export async function GET() {
  return NextResponse.json({ cookie: cookies().get("user")?.value });
}

export async function POST(req) {
  const body = await req.formData();
  const image = body.get("image");
  const user = body.get("cookie");
  try {
    const imageName = await uploadImage(image);
    const [updateUser, singleUser] = await Promise.all([
      User.updateOne({ email: user }, { $set: { aboutImage: imageName } }),
      User.findOne({ email: user }),
    ]);

    if (fs.existsSync(`./public/uploads/${singleUser.aboutImage}`))
      fs.unlinkSync(`./public/uploads/${singleUser.aboutImage}`);
  } catch (error) {
    console.error(error.message);
  }
  return NextResponse.json({ message: "" });
}

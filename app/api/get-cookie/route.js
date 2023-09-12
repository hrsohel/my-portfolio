import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import User from "@/schemas/User";
import { uploadImage } from "@/controllers/uploadImage";
import fs from "fs";
import cloudinary from "@/controllers/cloudinary";

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

    await cloudinary.uploader.destroy(singleUser.aboutImage.public_id);
  } catch (error) {
    console.error(error.message);
  }
  return NextResponse.json({ message: "" });
}

import "@/controllers/coonectMongo";
import { uploadImage } from "@/controllers/uploadImage";
import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(req) {
  try {
    const body = await req.formData();
    const newImage = await uploadImage(body.get("new-image"));
    await Work.updateOne(
      { _id: body.get("_id") },
      {
        $set: {
          image: newImage,
        },
      }
    );
    if (fs.existsSync(`./public/uploads/${body.get("old-image")}`)) {
      fs.unlinkSync(`./public/uploads/${body.get("old-image")}`);
    }
    return NextResponse.json({ message: "updated" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.formData();
    const images = body.get("images").split(",");
    const image = body.get("image");
    if (fs.existsSync(`./public/uploads/${image}`)) {
      fs.unlinkSync(`./public/uploads/${image}`);
    }
    if (images.length) {
      for (let i = 0; i < images.length; i++) {
        if (fs.existsSync(`./public/uploads/${images[i]}`)) {
          fs.unlinkSync(`./public/uploads/${images[i]}`);
        }
      }
    }
    await Work.deleteOne({ _id: body.get("_id") });
    return NextResponse.json({ message: "deleted" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

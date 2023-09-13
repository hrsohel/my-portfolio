import "@/controllers/coonectMongo";
import { uploadImage } from "@/controllers/uploadImage";
import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";
import fs from "fs";
import cloudinary from "@/controllers/cloudinary";

export async function POST(req) {
  try {
    const body = await req.formData();
    const newImage = await uploadImage(body.get("new-image"));
    const [updateWork, getWork] = await Promise.all([
      Work.updateOne(
        { _id: body.get("_id") },
        {
          $set: {
            image: newImage,
          },
        }
      ),
      Work.findById(body.get("_id")),
    ]);
    await cloudinary.uploader.destroy(getWork.image?.public_id);
    return NextResponse.json({ message: "updated" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.formData();
    const imagePublicId = body.get("image");
    const getWork = await Work.findById(body.get("_id"));
    if (getWork?.carouselImages?.length) {
      for (let i = 0; i < getWork?.carouselImages?.length; i++) {
        await cloudinary.uploader.destroy(getWork?.carouselImages[i].public_id);
      }
    }
    await cloudinary.uploader.destroy(imagePublicId);
    await Work.deleteOne({ _id: body.get("_id") });
    return NextResponse.json({ message: "deleted" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

import "@/controllers/coonectMongo";
import { uploadImage } from "@/controllers/uploadImage";
import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";
import fs from "fs";
import cloudinary from "@/controllers/cloudinary";

export async function POST(req) {
  try {
    const body = await req.formData();
    const imageName = await uploadImage(body.get("add-image"));
    await Work.updateOne(
      { _id: body.get("_id") },
      {
        $push: {
          carouselImages: imageName,
        },
      }
    );
    return NextResponse.json({ message: "updated" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(req) {
  try {
    const body = await req.formData();
    const imageID = body.get("image_id");
    const getWork = await Work.findById(body.get("_id"));
    const image = getWork.carouselImages.find(
      (item) => item._id.toString() === imageID
    );
    await Work.updateOne(
      { _id: body.get("_id") },
      {
        $pull: {
          carouselImages: { _id: image._id },
        },
      }
    );
    await cloudinary.uploader.destroy(image.public_id);
    return NextResponse.json({ message: "updated" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.formData();
    const oldImageID = body.get("old-image");
    const imageName = await uploadImage(body.get("update-image"));
    const getWork = await Work.findById(body.get("_id"));
    const imageDetails = getWork.carouselImages.find(
      (item) => item._id.toString() === oldImageID
    );
    await Work.updateOne(
      { _id: body.get("_id"), "carouselImages._id": oldImageID },
      {
        $set: {
          "carouselImages.$.public_id": imageName.public_id,
          "carouselImages.$.url": imageName.url,
        },
      }
    );
    await cloudinary.uploader.destroy(imageDetails.public_id);
    return NextResponse.json({ message: "updated" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

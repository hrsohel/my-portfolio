import "@/controllers/coonectMongo";
import { uploadImage } from "@/controllers/uploadImage";
import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";
import fs from "fs";

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
    if (fs.existsSync(`./public/uploads/${body.get("image")}`)) {
      fs.unlinkSync(`./public/uploads/${body.get("image")}`);
    }
    await Work.updateOne(
      { _id: body.get("_id") },
      {
        $pull: {
          carouselImages: body.get("image"),
        },
      }
    );
    return NextResponse.json({ message: "updated" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.formData();
    const oldImage = body.get("old-image");
    const imageName = await uploadImage(body.get("update-image"));
    await Work.updateOne(
      { _id: body.get("_id"), carouselImages: oldImage },
      {
        $set: { "carouselImages.$": imageName },
      }
    );
    if (fs.existsSync(`./public/uploads/${oldImage}`)) {
      fs.unlinkSync(`./public/uploads/${oldImage}`);
    }
    return NextResponse.json({ message: "updated" });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

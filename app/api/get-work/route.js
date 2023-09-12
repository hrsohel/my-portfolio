import "@/controllers/coonectMongo";
import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";
import { uploadImage } from "@/controllers/uploadImage";

export async function GET() {
  return NextResponse.json({ works: await Work.find({}) });
}

export async function POST(req, res) {
  const body = await req.formData();
  try {
    const imageName = await uploadImage(body.get("image"));
    if (imageName) {
      await Work.create({
        title: body.get("title"),
        category: body.get("category"),
        desc: body.get("desc"),
        client: body.get("client"),
        url: body.get("url"),
        github: body.get("github"),
        date: body.get("date"),
        image: imageName,
      });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message });
  }
}

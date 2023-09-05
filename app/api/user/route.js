import "@/controllers/coonectMongo";
import { uploadImage } from "@/controllers/uploadImage";
import { NextResponse } from "next/server";
import User from "@/schemas/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.formData();
    const homeImage1 = body.get("homeimage1");
    const homeImage2 = body.get("homeimage2");
    const aboutImage = body.get("aboutimage");
    const hashedPassword = await bcrypt.hash(body.get("password"), 10);
    const user = await User.find();
    if (user.length > 0) {
      return NextResponse.json({ error: "you cannot register here" });
    }
    Promise.all([
      uploadImage(homeImage1),
      uploadImage(homeImage2),
      uploadImage(aboutImage),
    ]).then(async (res) => {
      await User.create({
        email: body.get("email"),
        homeImage1: res[0],
        homeImage2: res[1],
        aboutImage: res[2],
        workCompleted: body.get("workCompleted"),
        yearsExperience: body.get("yearsExperience"),
        totalClient: body.get("totalClient"),
        awards: body.get("awards"),
        password: hashedPassword,
      });
    });
    return NextResponse.json({ succees: true });
  } catch (error) {
    console.error(error.message);
  }
}

export async function GET() {
  return NextResponse.json({ user: await User.find() });
}

import "@/controllers/coonectMongo";
import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.formData();
  try {
    await Work.updateOne(
      { _id: body.get("_id") },
      {
        $set: {
          category: body.get("category"),
          client: body.get("client"),
          date: body.get("date"),
          url: body.get("url"),
          github: body.get("github"),
        },
      }
    );
    return NextResponse.json({ message: true });
  } catch (error) {
    return NextResponse.json({ message: false });
  }
}

import "@/controllers/coonectMongo";
import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.formData();
  try {
    await Work.updateOne(
      { _id: body.get("_id") },
      { $set: { desc: body.get("desc") } }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

import Work from "@/schemas/AddWork";
import { NextResponse } from "next/server";
import "@/controllers/coonectMongo";

export async function GET(req) {
  const url = new URL(req.url);
  const _id = url.pathname.split("/")[3];
  return NextResponse.json({ message: await Work.find({ _id }) });
}

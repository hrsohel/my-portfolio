import { NextResponse } from "next/server";
import User from "@/schemas/User";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(req) {
  const formData = await req.formData();
  try {
    const user = await User.find({ email: formData.get("email") });
    if (user.length === 0) throw new Error("You cannot login!");
    const verifiedPassword = await bcrypt.compare(
      formData.get("password"),
      user[0].password
    );
    if (!verifiedPassword) throw new Error("You cannot login!");
    cookies().set("user", user[0].email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ error: error.message });
  }
}

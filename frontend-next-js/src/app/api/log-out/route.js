import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const cockieDB = await cookies();
    cockieDB.delete("print-manjil-ac");

    return NextResponse.json(
      { success: true, message: "Merchant logged out successfully" },
      { status: 200 }
    );
  } catch (exception) {
    return NextResponse.json(
      { success: false, message: exception.message },
      { status: 200 }
    );
  }
}

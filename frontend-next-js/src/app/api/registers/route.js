import { appConfig } from "@/config/appConfig";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const url = appConfig.url;
    const token = appConfig.token;

    const body = await req.json();
    const { data } = await axios.post(`${url}/merchant/register`, body, {
      headers: { "f-token": token },
    });

    return NextResponse.json(
      { success: true, message: "Merchant registered successfully", data },
      { status: 200 }
    );
  } catch (exception) {
    return NextResponse.json(
      { success: false, message: exception.message },
      { status: 200 }
    );
  }
}

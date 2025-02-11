import { appConfig } from "@/config/appConfig";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const url = appConfig.url;
    const token = appConfig.token;
    let status;
    let message;
    const cockieDB = await cookies();

    const body = await req.json();
    const { data } = await axios.post(`${url}/merchant/login`, body, {
      headers: { "f-token": token },
    });
    if (data.status) {
      const cookiesLoginAge = 1 * 60 * 60;
      cockieDB.set("print-manjil-ac", JSON.stringify(data?.result), {
        secure: false,
        httpOnly: true,
        path: "/",
        maxAge: cookiesLoginAge,
      });
      status = true;
      message = data.msg;
    } else {
      status = false;
      message = data.msg;
    }

    return NextResponse.json(
      { success: status, message: message, data },
      { status: 200 }
    );
  } catch (exception) {
    return NextResponse.json(
      { success: false, message: exception.message },
      { status: 200 }
    );
  }
}

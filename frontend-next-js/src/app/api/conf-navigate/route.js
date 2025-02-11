import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const cockieDB = await cookies();
    const getUser = cockieDB.get("print-manjil-ac");
    const user = getUser && getUser.value && JSON.parse(getUser.value);

    return NextResponse.json(
      { success: true, message: "Config served", user },
      { status: 200 }
    );
  } catch (exception) {
    return NextResponse.json(
      { success: false, message: exception.message },
      { status: 200 }
    );
  }
}

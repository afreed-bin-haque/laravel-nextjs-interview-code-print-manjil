import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();
  const getUser = cookieStore.get("print-manjil-ac");
  const user = getUser && getUser.value && JSON.parse(getUser.value);
  if (user && user.token && user.path) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL(`/login`, request.url));
  }
}

export const config = {
  matcher: ["/merchant/:path*", "/admin/:path"],
};

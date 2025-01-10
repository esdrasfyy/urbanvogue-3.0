"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { APP_ROUTES } from "./app/utils/app-routes.util";

function isLogged() {
  const cookieStore = cookies();
  const token = cookieStore.get(process.env.SESSION_COOKIE as string);

  if (!token) {
    return false;
  }
  return true;
}

let routeHistory: any = [];

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const host = process.env.NEXT_PUBLIC_APP_URL;

  const currentRoute = request.nextUrl.pathname;
  routeHistory.push(currentRoute);

  if (routeHistory.length > 10) {
    routeHistory.shift();
  }

  const appPublicRoutes = Object.values(APP_ROUTES.public);
  const isPublicRoute = appPublicRoutes.includes(pathname);

  const appOthersRoutes = Object.values(APP_ROUTES.others);
  const isOtherRoute = appOthersRoutes.includes(pathname);

  if (isOtherRoute && isLogged()) {
    return NextResponse.redirect(`${host}`);
  }
  if (!isPublicRoute && !isOtherRoute && !isLogged()) {
    return NextResponse.redirect(`${host}login`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/product", "/login", "/register", "/my", "/my/profile"],
};

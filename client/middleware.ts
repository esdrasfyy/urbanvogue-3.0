"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { APP_ROUTES } from "./app/utils/app-routes.util";

function isLogged() {
  const cookieStore = cookies();
  return Boolean(cookieStore.get("urbanvogue_session"));
}

const routeHistory: string[] = [];

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const host = process.env.NEXT_PUBLIC_APP_URL;

  const currentRoute = request.nextUrl.pathname;
  routeHistory.push(currentRoute);

  if (routeHistory.length > 10) {
    routeHistory.shift(); // Remove a rota mais antiga
  }

  const appPublicRoutes = new Set(Object.values(APP_ROUTES.public));
  const appOthersRoutes = new Set(Object.values(APP_ROUTES.others));

  const isPublicRoute = appPublicRoutes.has(pathname);
  const isOtherRoute = appOthersRoutes.has(pathname);

  if (isOtherRoute && isLogged()) {
    console.log("Redirecionado para a home");
    return NextResponse.redirect(`${host}`);
  }

  if (!isPublicRoute && !isOtherRoute && !isLogged()) {
    console.log("Usuário não logado, redirecionando para login");
    return NextResponse.redirect(`${host}/login`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/product", "/login", "/forgot-password", "/register", "/account", "/account/edit", "/account/orders", "/search", "/checkout", "/checkout/approve"],
};

"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { APP_ROUTES } from "./app/utils/app-routes.util";

function isLogged() {
  const cookieStore = cookies();
  const token = cookieStore.get("urbanvogue_session");

  if (!token) {
    return false;
  }
  return true;
}

let routeHistory:any = [];

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const host = process.env.NEXT_PUBLIC_APP_URL;

  console.log(pathname, isLogged());

   const currentRoute = request.nextUrl.pathname;
   routeHistory.push(currentRoute);

   if (routeHistory.length > 10) {
     // Altere 10 para o número desejado de rotas a serem armazenadas
     routeHistory.shift(); // Remove a rota mais antiga
   }

   console.log(routeHistory);
   

  const appPublicRoutes = Object.values(APP_ROUTES.public);
  const isPublicRoute = appPublicRoutes.includes(pathname);

  const appOthersRoutes = Object.values(APP_ROUTES.others);
  const isOtherRoute = appOthersRoutes.includes(pathname);

  if (isOtherRoute && isLogged()) {
    console.log("redirecionado a home");

    return NextResponse.redirect(`${host}`);
  }
  if (!isPublicRoute && !isOtherRoute && !isLogged()) {
    return NextResponse.redirect(`${host}login`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/product", "/login", "/forgot-password", "/register", "/account", "/account/edit", "/account/orders", "/search", "/checkout", "/checkout/approve"],
};

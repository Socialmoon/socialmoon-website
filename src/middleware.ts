import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow API routes and under-construction page to proceed normally
  if (pathname.startsWith("/api") || pathname === "/under-construction") {
    return NextResponse.next();
  }

  // Redirect all other routes to under-construction
  return NextResponse.redirect(new URL("/under-construction", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};

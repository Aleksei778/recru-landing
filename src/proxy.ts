import { NextRequest, NextResponse } from "next/server";

const languages = ["en", "ru"] as const;
const defaultLanguage = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (languages.some((lang) => pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLang = languages.find((lang) =>
    acceptLanguage.toLowerCase().includes(lang)
  ) ?? defaultLanguage;

  return NextResponse.redirect(
    new URL(`/${preferredLang}${pathname === "/" ? "" : pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
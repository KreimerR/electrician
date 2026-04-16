import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED_LANGS = ["en", "he", "ru"]
const DEFAULT_LANG = "en"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  const hasLang = SUPPORTED_LANGS.some((lang) =>
    pathname.startsWith(`/${lang}`),
  )

  if (!hasLang) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LANG}${pathname}`
    return NextResponse.redirect(url)
  }
}

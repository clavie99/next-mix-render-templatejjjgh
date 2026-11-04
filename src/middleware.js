import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname === '/ssr') {
    return NextResponse.redirect(new URL('/login', request.url), 308);
  }

  return NextResponse.next();
}

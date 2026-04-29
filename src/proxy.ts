import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const token = request.cookies.get('accessToken')?.value;

    console.log(token)

    const { pathname } = request.nextUrl;

    const protectedPaths = ['/profile', '/settings', '/appointments'];

    const authRoutes = ['/login', '/register', '/forgot-password'];

    const isProtectedPath = protectedPaths.some((path) => {
        return pathname.startsWith(path.replace('/*', ''));
    })

    // current path auth route or not
    const isAuthRoute = authRoutes.some((route) =>
        pathname === route
    )

    console.log(isAuthRoute)

    if (isProtectedPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Allow users to visit auth routes even if they have a token (since it might be expired)
    // Removed the isAuthRoute && token redirect block to solve the redirect loop issue.

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/login', '/register', '/forgot-password'],
}
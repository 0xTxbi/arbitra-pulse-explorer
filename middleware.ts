import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { checkJWTValidity } from "./utils/checkJwtValidity";

export default async function middleware(req: NextRequest) {
	// retrieve token from cookies
	const cookieStore = cookies();
	let token = cookieStore.get("token")?.value;

	// check if token exists
	if (!token) {
		console.error("Token is undefined");
	} else {
		// check if session is valid
		const isAuthenticated = checkJWTValidity(token);

		if (!isAuthenticated) {
			console.error("Invalid token");
		}
	}

	// list of protected routes
	const protectedRoutes = [
		"/dashboard",
		"/watchlist",
		"/settings",
		"/stock",
	];

	// only redirect if the user is trying to access a protected route
	if (
		protectedRoutes.includes(req.nextUrl.pathname) &&
		(!token || !checkJWTValidity(token)) &&
		!req.nextUrl.pathname.endsWith(".css") &&
		!req.nextUrl.pathname.endsWith(".js")
	) {
		const absoluteURL = new URL("/", req.nextUrl.origin);
		return NextResponse.redirect(absoluteURL.toString());
	}
}

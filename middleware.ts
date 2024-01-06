import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export default async function middleware(req: NextRequest) {
	const cookieStore = cookies();

	// retrieve token
	let token = cookieStore.get("token")?.value;

	// check if jwt is valid
	function checkJWTValidity(token: string): boolean {
		// decode token and retrieve expiry date
		const decodedToken = jwtDecode(token).exp;

		// retrieve current time in unix format
		const currentDate = Math.floor(new Date().getTime() / 1000);

		return decodedToken > currentDate;
	}

	const isAuthenticated = checkJWTValidity(token);

	// list of protected routes
	const protectedRoutes = [
		"/dashboard",
		"/watchlist",
		"/settings",
		"/stock",
	];

	if (
		!isAuthenticated &&
		protectedRoutes.includes(req.nextUrl.pathname)
	) {
		const absoluteURL = new URL("/", req.nextUrl.origin);
		return NextResponse.redirect(absoluteURL.toString());
	}
}

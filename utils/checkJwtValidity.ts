import { jwtDecode } from "jwt-decode";

// utility to check JWT validity
export function checkJWTValidity(token: string): boolean {
	// Decode token and retrieve expiry date
	const decodedToken = jwtDecode(token);

	// check if token is valid
	if (!decodedToken || !decodedToken.exp) {
		console.error("Invalid token");
		return false;
	}

	// retrieve current time in unix format
	const currentDate = Math.floor(new Date().getTime() / 1000);

	return decodedToken.exp > currentDate;
}

import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export const useLogout = () => {
	const router = useRouter();
	const [cookies, setCookie] = useCookies(["token"]);

	const handleLogout = () => {
		// delete token from cookies
		setCookie("token", "", {
			path: "/",
			secure: true,
			sameSite: "strict",
			maxAge: -1,
		});

		// redirect to home page
		router.push("/");
	};

	return { handleLogout };
};

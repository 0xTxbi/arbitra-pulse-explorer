import { LoginFormValues } from "@/utils/AuthFormValues";
import { useState } from "react";

export const useLogin = () => {
	const [loginLoading, setLoginLoading] = useState(false);
	const [loginError, setLoginError] = useState<string | null>(null);

	const handleSubmit = async (values: LoginFormValues) => {
		setLoginLoading(true);
		setLoginError(null);

		try {
			const response = await fetch(
				"https://arbitra-pulse-auth.onrender.com/login",
				{
					method: "POST",
					headers: {
						"Content-Type":
							"application/json",
					},
					body: JSON.stringify(values),
				}
			);

			if (response.ok) {
				// handle successful registration
				console.log("Authentication successful!");
			} else {
				// handle registration error
				console.error("Authentication failed");
				setLoginError(
					"Authentication failed. Please try again."
				);
			}
		} catch (error) {
			console.error("Error during authentication:", error);
			setLoginError(
				"An unexpected error was encountered while authenticating your account. Please try again."
			);
		} finally {
			setLoginLoading(false);
		}
	};

	return { handleSubmit, loginLoading, loginError };
};

import { RegisterFormValues } from "@/utils/AuthFormValues";
import { useState } from "react";

export const useRegistration = () => {
	const [registrationLoading, setRegistrationLoading] = useState(false);
	const [registrationError, setRegistrationError] = useState<
		string | null
	>(null);

	const handleSubmit = async (values: RegisterFormValues) => {
		setRegistrationLoading(true);
		setRegistrationError(null);

		try {
			const response = await fetch(
				"https://arbitra-pulse-auth.onrender.com/register",
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
				console.log("Account created successful!");
			} else {
				// handle registration error
				console.error("Registration failed");
				setRegistrationError(
					"Registration failed. Please try again."
				);
			}
		} catch (error) {
			console.error("Error during registration:", error);
			setRegistrationError(
				"An unexpected error was encountered while creating your account. Please try again."
			);
		} finally {
			setRegistrationLoading(false);
		}
	};

	return { handleSubmit, registrationLoading, registrationError };
};

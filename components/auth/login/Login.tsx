import {
	Anchor,
	Button,
	Container,
	Group,
	Loader,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
	rem,
} from "@mantine/core";
import classes from "./Login.module.css";
import { useForm } from "@mantine/form";
import { LoginFormValues } from "@/utils/AuthFormValues";
import { useLogin } from "@/hooks/useLogin";
import { IconCheck, IconLogin } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function Login() {
	const router = useRouter();
	const form = useForm<LoginFormValues>({
		initialValues: {
			usernameOrEmail: "",
			password: "",
		},

		validate: {
			usernameOrEmail: (value) =>
				value.length < 1
					? "Your username must include at least 1 character"
					: null,
			password: (value) =>
				value.length < 8
					? "Password must include at least 8 characters"
					: null,
		},
	});

	// notif ID
	const loginNotifId: any = useRef(null);

	// submit handler
	const { handleSubmit, loginLoading, loginSuccess, loginError } =
		useLogin();

	// useEffect hook to handle loginSuccess change
	useEffect(() => {
		if (loginSuccess) {
			// update notifications
			notifications.update({
				id: loginNotifId.current,
				color: "teal",
				title: "Authentication Successful",
				message: "Welcome back! You are now securely logged into your Arbitra Pulse account. Redirecting to your dashboard.",
				icon: (
					<IconCheck
						style={{
							width: rem(15),
							height: rem(15),
						}}
					/>
				),
				loading: false,
				autoClose: 3000,
			});

			router.push("/dashboard");
		}
	}, [loginSuccess]);

	return (
		<Container
			className={classes.wrapper}
			fluid
		>
			<Title
				mb="xl"
				ta="center"
			>
				Sign In To Your Account
			</Title>

			<form
				onSubmit={form.onSubmit((values) =>
					console.log(values)
				)}
			>
				<Paper
					p={30}
					w="100%"
					radius="md"
				>
					<TextInput
						label="Username or Email Address"
						placeholder="txbi"
						{...form.getInputProps(
							"usernameOrEmail"
						)}
						required
						disabled={loginLoading}
					/>
					<PasswordInput
						placeholder="Your password"
						label="Your Password"
						required
						autoComplete="new-password"
						description="Password must be at least 8 characters long."
						disabled={loginLoading}
						{...form.getInputProps(
							"password"
						)}
						mt="lg"
					/>
				</Paper>
			</form>
			<Group
				justify="center"
				mt="xl"
			>
				<Button
					type="submit"
					variant="gradient"
					gradient={{
						from: "blue",
						to: "red",
					}}
					leftSection={
						loginLoading ? (
							<Loader
								type="dots"
								size={rem(12)}
								color="white"
							/>
						) : (
							<IconLogin size={12} />
						)
					}
					disabled={
						loginLoading ||
						form.values.password.length <
							8 ||
						form.values.usernameOrEmail
							.length < 1
					}
					onClick={() => {
						console.log(form.values);

						handleSubmit(form.values);

						console.log(loginSuccess);
						// display notifications
						loginNotifId.current =
							notifications.show({
								loading: true,
								title: "Authenticating",
								message: "We're verifying your credentials. Please wait a moment",
								autoClose: false,
								withCloseButton:
									false,
							});
					}}
				>
					{loginLoading
						? "Authenticating"
						: "Sign In"}
				</Button>
			</Group>

			{/* link to register page */}
			<Group
				justify="center"
				mt="xl"
			>
				<Text
					ta="center"
					size="sm"
				>
					don't have an existing account?{" "}
					<Anchor
						href="/register"
						lh={1}
						size="sm"
					>
						Create an Account
					</Anchor>{" "}
					instead
				</Text>
			</Group>
		</Container>
	);
}

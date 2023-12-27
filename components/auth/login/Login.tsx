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
import { IconLogin } from "@tabler/icons-react";

export function Login() {
	// form
	const form = useForm<LoginFormValues>({
		initialValues: {
			usernameOrEmail: "",
			password: "",
		},
	});

	// submit handler
	const { handleSubmit, loginLoading, loginError } = useLogin();

	console.log(loginLoading);

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
					/>
					<PasswordInput
						placeholder="Your password"
						label="Your Password"
						required
						autoComplete="new-password"
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
					disabled={loginLoading}
					onClick={() => {
						console.log(form.values);

						handleSubmit(form.values);
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

import { useEffect, useRef, useState } from "react";
import {
	IconUserCheck,
	IconCircleCheck,
	IconWriting,
	IconKey,
	IconArrowNarrowRight,
	IconArrowNarrowLeft,
	IconDashboard,
	IconCheck,
} from "@tabler/icons-react";
import {
	Button,
	Container,
	Group,
	Stepper,
	Text,
	Title,
	rem,
} from "@mantine/core";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import classes from "./Register.module.css";
import { ThirdStep } from "./ThirdStep";
import { LastStep } from "./LastStep";
import { useForm } from "@mantine/form";
import { RegisterFormValues } from "@/utils/AuthFormValues";
import { useRegistration } from "@/hooks/useRegistration";
import Link from "next/link";
import { notifications } from "@mantine/notifications";

export function Register() {
	const [active, setActive] = useState(0);

	// navigate through steps
	const nextStep = () =>
		setActive((current: any) => {
			if (form.validate().hasErrors) {
				return current;
			}

			return current < 3 ? current + 1 : current;
		});
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	// form
	const form = useForm<RegisterFormValues>({
		initialValues: {
			username: "",
			email: "",
			hashedPassword: "",
		},

		validate: (values) => {
			if (active === 0) {
				return {
					username:
						values.username.trim().length <
						4
							? "Your username must include at least 4 characters"
							: null,
					// TODO: improve regex
					email: /^\S+@\S+$/.test(values.email)
						? null
						: "The email address you provided is invalid",
				};
			}

			if (active === 1) {
				return {
					password:
						values.hashedPassword.length < 8
							? "Password must include at least 8 characters"
							: null,
				};
			}

			return {};
		},
	});

	// notif ID
	const loginNotifId: any = useRef(null);

	// submit handler
	const {
		handleSubmit,
		registrationLoading,
		registrationSuccess,
		registrationError,
	} = useRegistration();

	// useEffect hook to handle loginSuccess change
	useEffect(() => {
		if (registrationSuccess) {
			// update notifications
			notifications.update({
				id: loginNotifId.current,
				color: "teal",
				title: "Account Creation Successful",
				message: "Welcome to Arbitra Pulse!",
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
		}
	}, [registrationSuccess]);

	console.log(registrationLoading, registrationError);

	return (
		<Container
			className={classes.wrapper}
			fluid
		>
			<Title
				mb="xl"
				ta="center"
			>
				Create An Account
			</Title>
			<form
				onSubmit={form.onSubmit((values) =>
					console.log(values)
				)}
			>
				<Stepper
					active={active}
					onStepClick={setActive}
					allowNextStepsSelect={false}
					completedIcon={
						<IconCircleCheck
							style={{
								width: rem(18),
								height: rem(18),
							}}
						/>
					}
				>
					{/* First step */}
					<Stepper.Step
						icon={
							<IconWriting
								style={{
									width: rem(
										18
									),
									height: rem(
										18
									),
								}}
							/>
						}
						label="Step 1"
						description="your basics"
					>
						<FirstStep form={form} />
					</Stepper.Step>

					{/* Second step */}
					<Stepper.Step
						icon={
							<IconKey
								style={{
									width: rem(
										18
									),
									height: rem(
										18
									),
								}}
							/>
						}
						label="Step 2"
						description="secure your account"
					>
						<SecondStep form={form} />
					</Stepper.Step>

					{/* Third step */}
					<Stepper.Step
						icon={
							<IconUserCheck
								style={{
									width: rem(
										18
									),
									height: rem(
										18
									),
								}}
							/>
						}
						label="Step 3"
						description="almost there"
						loading={registrationLoading}
					>
						<ThirdStep
							loading={
								registrationLoading
							}
							error={
								registrationError
							}
						/>
					</Stepper.Step>

					{/* Completed Step */}
					<Stepper.Completed>
						<LastStep />
					</Stepper.Completed>
				</Stepper>
			</form>

			<Group
				justify="center"
				mt="xl"
			>
				{active !== 0 && active !== 3 && (
					<Button
						variant="default"
						leftSection={
							<IconArrowNarrowLeft
								size={12}
							/>
						}
						onClick={prevStep}
						// disabled={registrationLoading}
					>
						Back
					</Button>
				)}
				{active === 1 ? (
					<Button
						variant="gradient"
						gradient={{
							from: "blue",
							to: "red",
						}}
						onClick={() => {
							console.log(
								form.values
							);

							handleSubmit(
								form.values
							);

							console.log(
								registrationSuccess
							);
							// display notifications
							loginNotifId.current =
								notifications.show(
									{
										loading: true,
										title: "Creating Account",
										message: "We're creating your account. Please wait a moment",
										autoClose: false,
										withCloseButton:
											false,
									}
								);

							nextStep();
						}}
						disabled={
							form.values
								.hashedPassword
								.length < 8
						}
					>
						Create Account
					</Button>
				) : active !== 3 ? (
					<Button
						variant="gradient"
						gradient={{
							from: "blue",
							to: "red",
						}}
						leftSection={
							<IconArrowNarrowRight
								size={12}
							/>
						}
						onClick={nextStep}
						disabled={registrationLoading}
					>
						Next step
					</Button>
				) : (
					<Link href="/login">
						<Button
							variant="gradient"
							gradient={{
								from: "blue",
								to: "red",
							}}
							leftSection={
								<IconDashboard
									size={
										12
									}
								/>
							}
							onClick={nextStep}
						>
							Login to access
							Dashboard
						</Button>
					</Link>
				)}
			</Group>

			<Group
				justify="center"
				mt="xl"
			>
				<Text
					ta="center"
					size="sm"
				>
					have an existing account?{" "}
					<Link
						style={{
							textDecoration: "none",
						}}
						href="/login"
					>
						Sign In
					</Link>{" "}
					instead
				</Text>
			</Group>
		</Container>
	);
}

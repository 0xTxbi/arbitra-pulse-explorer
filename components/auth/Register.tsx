import { useState } from "react";
import {
	IconUserCheck,
	IconCircleCheck,
	IconWriting,
	IconKey,
} from "@tabler/icons-react";
import { Button, Container, Group, Loader, Stepper, rem } from "@mantine/core";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import classes from "./Register.module.css";
import { ThirdStep } from "./ThirdStep";
import { LastStep } from "./LastStep";
import { useForm } from "@mantine/form";
import { RegisterFormValues } from "@/utils/AuthFormValues";
import { useRegistration } from "@/hooks/useRegistration";
import Link from "next/link";

export function Register() {
	const [active, setActive] = useState(0);
	console.log(active);
	// navigate through steps
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	// form
	const form = useForm<RegisterFormValues>({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	// submit handler
	const { handleSubmit, registrationLoading, error } = useRegistration();

	console.log(registrationLoading, error);

	return (
		<Container
			className={classes.wrapper}
			fluid
		>
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
					>
						<ThirdStep
							loading={
								registrationLoading
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
						onClick={prevStep}
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

							nextStep();
						}}
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
						onClick={nextStep}
					>
						Next step
					</Button>
				) : (
					<Link href="/dashboard">
						<Button
							variant="gradient"
							gradient={{
								from: "blue",
								to: "red",
							}}
							onClick={nextStep}
						>
							View Dashboard
						</Button>
					</Link>
				)}
			</Group>
		</Container>
	);
}

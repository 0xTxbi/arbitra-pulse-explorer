import { useState } from "react";
import {
	IconUserCheck,
	IconCircleCheck,
	IconWriting,
	IconKey,
} from "@tabler/icons-react";
import { Button, Container, Group, Stepper, rem } from "@mantine/core";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import classes from "./Register.module.css";
import { ThirdStep } from "./ThirdStep";
import { LastStep } from "./LastStep";

export function Register() {
	const [active, setActive] = useState(0);
	// navigate through steps
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<Container
			className={classes.wrapper}
			fluid
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
								width: rem(18),
								height: rem(18),
							}}
						/>
					}
					label="Step 1"
					description="your basics"
				>
					<FirstStep />
				</Stepper.Step>

				{/* Second step */}
				<Stepper.Step
					icon={
						<IconKey
							style={{
								width: rem(18),
								height: rem(18),
							}}
						/>
					}
					label="Step 2"
					description="secure your account"
				>
					<SecondStep />
				</Stepper.Step>

				{/* Third step */}
				<Stepper.Step
					icon={
						<IconUserCheck
							style={{
								width: rem(18),
								height: rem(18),
							}}
						/>
					}
					label="Step 3"
					description="almost there"
				>
					<ThirdStep />
				</Stepper.Step>

				{/* Completed Step */}
				<Stepper.Completed>
					<LastStep />
				</Stepper.Completed>
			</Stepper>

			<Group
				justify="center"
				mt="xl"
			>
				{active !== 0 && (
					<Button
						variant="default"
						onClick={prevStep}
					>
						Back
					</Button>
				)}
				{active !== 3 && (
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
				)}
			</Group>
		</Container>
	);
}

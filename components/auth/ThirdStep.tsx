import React from "react";
import { Center, Loader, Text } from "@mantine/core";
import { CustomContainer } from "../ui/CustomContainer";
import {
	IconWindmill,
	IconCircleCheck,
	IconLoader,
	IconMoodSad,
} from "@tabler/icons-react";

interface ThirdStepProps {
	loading: boolean;
	error: boolean | null | string;
}

export function ThirdStep({ loading, error }: ThirdStepProps) {
	return (
		<CustomContainer>
			<Center mb={10}>
				{loading ? (
					<Loader size={35} />
				) : error ? (
					<IconMoodSad
						color="orange"
						stroke={1.5}
						size={50}
					/>
				) : (
					<IconCircleCheck
						color="teal"
						size={50}
					/>
				)}
			</Center>
			<Text ta="center">
				{loading
					? "We're setting up your account. Sit tight!"
					: error
						? "An unexpected error was encountered while creating your account."
						: "Account setup complete!"}
			</Text>
		</CustomContainer>
	);
}

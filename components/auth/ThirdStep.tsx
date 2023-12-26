import React from "react";
import { Center, Loader, Text } from "@mantine/core";
import { CustomContainer } from "../ui/CustomContainer";
import { IconWindmill, IconCircleCheck, IconLoader } from "@tabler/icons-react";

interface ThirdStepProps {
	loading: boolean;
}

export function ThirdStep({ loading }: ThirdStepProps) {
	return (
		<CustomContainer>
			<Center mb={10}>
				{loading ? (
					<Loader size={35} />
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
					: "Account setup complete!"}
			</Text>
		</CustomContainer>
	);
}

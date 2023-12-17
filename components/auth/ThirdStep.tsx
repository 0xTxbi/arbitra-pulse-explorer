import { Center, Text } from "@mantine/core";
import { CustomContainer } from "../ui/CustomContainer";
import { IconWindmill } from "@tabler/icons-react";

export function ThirdStep() {
	return (
		<CustomContainer>
			<Center mb={5}>
				<IconWindmill size={50} />
			</Center>
			<Text ta="center">
				we're setting up your account. sit tight!{" "}
			</Text>
		</CustomContainer>
	);
}

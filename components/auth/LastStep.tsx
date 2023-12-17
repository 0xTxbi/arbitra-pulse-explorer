import { Center, Text } from "@mantine/core";
import { CustomContainer } from "../ui/CustomContainer";
import { IconRocket } from "@tabler/icons-react";

export function LastStep() {
	return (
		<CustomContainer>
			<Center mb={5}>
				<IconRocket size={50} />
			</Center>
			<Text ta="center">awesome. you're ready to go</Text>
		</CustomContainer>
	);
}

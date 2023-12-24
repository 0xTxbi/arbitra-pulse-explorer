import { TextInput, Paper } from "@mantine/core";
import { CustomContainer } from "../ui/CustomContainer";
import { IconAt } from "@tabler/icons-react";

export function FirstStep() {
	return (
		<CustomContainer>
			<Paper
				p={30}
				mt={30}
				radius="md"
			>
				<TextInput
					label="Username"
					leftSection={<IconAt size={12} />}
					placeholder="txbi"
					required
				/>
				<TextInput
					label="Your Email Address"
					placeholder="txbi@arbitra.pulse"
					required
					mt="md"
				/>
			</Paper>
		</CustomContainer>
	);
}

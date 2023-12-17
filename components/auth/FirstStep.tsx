import { TextInput, Paper } from "@mantine/core";
import { CustomContainer } from "../ui/CustomContainer";

export function FirstStep() {
	return (
		<CustomContainer>
			<Paper
				p={30}
				mt={30}
				radius="md"
			>
				<TextInput
					label="First Name"
					placeholder="Your Name"
					required
				/>
				<TextInput
					label="Email"
					placeholder="username@domain.com"
					required
					mt="md"
				/>
			</Paper>
		</CustomContainer>
	);
}

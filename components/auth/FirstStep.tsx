import { TextInput, Paper, Container } from "@mantine/core";

export function FirstStep() {
	return (
		<Container
			size={420}
			my={40}
		>
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
		</Container>
	);
}

"use client";

import {
	Button,
	Container,
	Divider,
	Group,
	Stack,
	TextInput,
	Title,
} from "@mantine/core";
import { IconAt, IconEdit } from "@tabler/icons-react";

export function ProfileInformation() {
	return (
		<Container>
			<Title mb={20}>Profile Information</Title>

			{/* edit button */}
			<Group justify="flex-end">
				<Button
					size="xs"
					leftSection={<IconEdit size={12} />}
				>
					Edit
				</Button>
			</Group>

			{/* input */}
			<Stack gap="lg">
				<TextInput
					leftSectionPointerEvents="none"
					disabled
					leftSection={<IconAt size={12} />}
					label="Your Username"
					placeholder="Your Username"
					value="txbi"
				/>
				<TextInput
					disabled
					rightSectionPointerEvents="none"
					label="Your email"
					placeholder="Your email"
					value="txbi@arbitra.pulse"
				/>
			</Stack>
		</Container>
	);
}

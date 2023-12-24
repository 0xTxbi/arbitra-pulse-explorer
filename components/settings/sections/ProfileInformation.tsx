"use client";

import {
	Button,
	Container,
	Divider,
	Group,
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
			<TextInput
				leftSectionPointerEvents="none"
				disabled
				leftSection={<IconAt size={12} />}
				label="Your Username"
				placeholder="Your Username"
				value="txbi"
			/>
			<TextInput
				mt="md"
				disabled
				rightSectionPointerEvents="none"
				label="Your email"
				placeholder="Your email"
				value="txbi@arbitra.pulse"
			/>
		</Container>
	);
}

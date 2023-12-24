"use client";

import {
	Button,
	Container,
	Divider,
	Group,
	PasswordInput,
	Stack,
	TextInput,
	Title,
} from "@mantine/core";
import { IconAt, IconEdit, IconKey } from "@tabler/icons-react";

export function UpdatePassword() {
	return (
		<Container>
			<Title mb={20}>Update Your Password</Title>

			{/* edit button */}
			<Group justify="flex-end">
				<Button
					size="xs"
					leftSection={<IconKey size={12} />}
				>
					Change Password
				</Button>
			</Group>

			{/* input */}
			<Stack gap="lg">
				<PasswordInput label="Your Old Password" />
				<PasswordInput label="Your New Password" />
			</Stack>
		</Container>
	);
}

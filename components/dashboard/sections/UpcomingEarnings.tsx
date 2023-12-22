import {
	ActionIcon,
	Avatar,
	Group,
	Paper,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IconAlarmPlus } from "@tabler/icons-react";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

function Company() {
	return (
		<Group justify="space-between">
			<Group>
				{/* Date */}
				<Avatar
					size="lg"
					src="https://static.vecteezy.com/system/resources/previews/020/336/735/original/tesla-logo-tesla-icon-transparent-png-free-vector.jpg"
				/>

				{/* Company */}
				<Stack gap="xs">
					<Text
						c="white"
						size="md"
					>
						Tesla, Inc.
					</Text>
					<Text
						c="white"
						size="xs"
					>
						22nd December, 2023
					</Text>
				</Stack>
			</Group>

			{/* Reminder */}
			<ActionIcon
				size="lg"
				color="teal"
			>
				<IconAlarmPlus
					size="1.6rem"
					stroke={1.5}
				/>
			</ActionIcon>
		</Group>
	);
}

export function UpcomingEarnings() {
	return (
		<Stack
			p={10}
			h="100%"
		>
			<Title
				order={4}
				size="h5"
			>
				Upcoming Earnings
			</Title>

			<Company />
			<Company />
			<Company />
		</Stack>
	);
}

import useUpcomingEarnings from "@/hooks/useUpcomingEarnings";
import {
	ActionIcon,
	Avatar,
	Group,
	Paper,
	Skeleton,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IconAlarmPlus, IconCalendar } from "@tabler/icons-react";

function Company({ earningsInfo }) {
	return (
		<Group justify="space-between">
			<Group>
				{/* Date */}
				<IconCalendar />
				{/* Company */}
				<Stack gap="xs">
					<Text
						c="white"
						size="md"
					>
						{earningsInfo?.company}
					</Text>
					<Text
						c="white"
						size="xs"
					>
						{earningsInfo?.date}
					</Text>
				</Stack>
			</Group>

			{/* Reminder */}
			<ActionIcon
				variant="default"
				disabled
				size="lg"
				color="teal"
			>
				<IconAlarmPlus stroke={1.5} />
			</ActionIcon>
		</Group>
	);
}

export function UpcomingEarnings({ upcomingEarningsInfo }) {
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

			<Company earningsInfo={upcomingEarningsInfo} />
		</Stack>
	);
}

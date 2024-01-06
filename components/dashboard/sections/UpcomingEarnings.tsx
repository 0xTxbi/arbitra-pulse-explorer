import useUpcomingEarnings from "@/hooks/useUpcomingEarnings";
import {
	ActionIcon,
	Avatar,
	Group,
	Paper,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IconAlarmPlus, IconCalendar } from "@tabler/icons-react";

function Company() {
	const {
		upcomingEarningsInfo,
		upcomingEarningsLoading,
		upcomingEarningsError,
	} = useUpcomingEarnings();

	console.log(
		upcomingEarningsInfo,
		upcomingEarningsLoading,
		upcomingEarningsError
	);
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
						{upcomingEarningsInfo?.company}
					</Text>
					<Text
						c="white"
						size="xs"
					>
						{upcomingEarningsInfo?.date}
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
		</Stack>
	);
}

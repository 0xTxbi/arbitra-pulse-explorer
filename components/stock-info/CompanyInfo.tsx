import { Title, Text, Stack, Group, Badge } from "@mantine/core";
import { IconWorld } from "@tabler/icons-react";

export function CompanyInfo() {
	return (
		<Stack
			justify="space-between"
			gap="lg"
		>
			{/* Stock Basic Details */}
			<Stack>
				<Title
					order={4}
					size="h4"
				>
					About
				</Title>

				<Badge leftSection={<IconWorld size={15} />}>
					lockheedmartin.com
				</Badge>

				<Group>
					<Text
						size="sm"
						c="dimmed"
					>
						Lockheed Martin is the world's
						largest defense contractor and
						has dominated the Western market
						for high-end fighter aircraft
						since it won the F-35 Joint
						Strike Fighter program in 2001.
						Lockheed's largest segment is
						aeronautics, which derives
						upward of two-thirds of its
						revenue from the F-35.
						Lockheed's remaining segments
						are rotary and mission systems,
						which is mainly the Sikorsky
						helicopter business; missiles
						and fire control, which creates
						missiles and missile defense
						systems; and space systems,
						which produces satellites and
						receives equity income from the
						United Launch Alliance joint
						venture.
					</Text>
				</Group>
			</Stack>
		</Stack>
	);
}

import { useDate } from "@/utils/useDate";
import { Badge, Group } from "@mantine/core";
import { IconClock, IconMoon, IconSun, IconSunrise } from "@tabler/icons-react";
import React from "react";

const LiveTimeAndDate: React.FC = () => {
	const { date, time, timeOfDay } = useDate();

	return (
		<Group>
			<Group gap="xs">
				<Badge
					leftSection={
						timeOfDay === "morning" ? (
							<IconSunrise
								size={15}
							/>
						) : timeOfDay ===
						  "afternoon" ? (
							<IconSun size={15} />
						) : timeOfDay === "evening" ? (
							<IconMoon size={15} />
						) : null
					}
				>
					{date}
				</Badge>
			</Group>
			<Badge
				color="red"
				leftSection={<IconClock size={15} />}
			>
				{time}
			</Badge>
		</Group>
	);
};

export default LiveTimeAndDate;

import {
	Title,
	Text,
	Stack,
	Group,
	Badge,
	NumberFormatter,
	Divider,
} from "@mantine/core";
import { IconWorld } from "@tabler/icons-react";
import { StatInfo } from "./StatInfo";

export function MarketStats() {
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
					Quick Info
				</Title>
				{/* company info */}
				<StatInfo
					title="Market Cap"
					value={110877796720}
					isCurrency
				/>
				<StatInfo
					title="Employees"
					value={116000}
				/>
				<StatInfo
					title="Address"
					value="6801 ROCKLEDGE DR"
				/>
			</Stack>
		</Stack>
	);
}

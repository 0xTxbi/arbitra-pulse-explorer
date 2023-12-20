import { Title, Text, Stack, Group, NumberFormatter } from "@mantine/core";
import StockChart from "./StockChart";

export function StockMain() {
	return (
		<Stack
			h="100%"
			justify="space-between"
			gap="lg"
		>
			{/* Stock Basic Details */}
			<div>
				<Group>
					<Text
						size="sm"
						c="dimmed"
					>
						LMT
					</Text>
				</Group>
				<Title
					order={3}
					size="h3"
				>
					Lockheed Martin Corp.
				</Title>

				{/* stock price */}
				<Text size="xl">
					<NumberFormatter
						prefix="$"
						value={1024}
						thousandSeparator
					/>
				</Text>
				<StockChart />
			</div>
		</Stack>
	);
}

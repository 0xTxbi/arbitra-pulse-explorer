"use client";

import { Title, Text, Stack, Group, NumberFormatter } from "@mantine/core";
import StockChart from "./StockChart";

export function StockMain({ info }) {
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
						{info?.symbol}
					</Text>
				</Group>
				<Title
					order={2}
					size="h1"
				>
					{info?.companyName}
				</Title>

				{/* stock price */}
				<Text size="xl">
					<NumberFormatter
						prefix="$"
						value={1024}
						thousandSeparator
					/>
				</Text>
				<StockChart height={500} />
			</div>
		</Stack>
	);
}

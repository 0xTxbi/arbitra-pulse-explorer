"use client";

import {
	Title,
	Text,
	Stack,
	Group,
	NumberFormatter,
	Button,
} from "@mantine/core";
import StockChart from "./StockChart";
import { IconBookmark } from "@tabler/icons-react";

export function StockMain({ info }) {
	return (
		<Stack
			h="100%"
			justify="space-between"
			gap="lg"
		>
			{/* Stock Basic Details */}
			<div>
				<Text
					size="sm"
					c="dimmed"
				>
					{info?.symbol}
				</Text>

				<Group justify="space-between">
					<Title
						order={2}
						size="h1"
					>
						{info?.companyName}
					</Title>

					{/* add to watchlist button */}
					<Button
						size="xs"
						variant="gradient"
						gradient={{
							from: "blue",
							to: "red",
						}}
						leftSection={
							<IconBookmark
								size={12}
							/>
						}
					>
						Add to Watchlist
					</Button>
				</Group>

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

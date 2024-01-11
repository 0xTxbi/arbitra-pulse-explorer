"use client";
import {
	Title,
	Text,
	Stack,
	Group,
	SimpleGrid,
	Paper,
	NumberFormatter,
} from "@mantine/core";
import {
	IconCoins,
	IconDroplet,
	IconHistory,
	IconSparkles,
} from "@tabler/icons-react";

function MarketCap({ value }) {
	return (
		<Paper
			radius="md"
			p="md"
			bg="#202020"
		>
			<Group>
				<IconCoins />
				<Stack>
					<Title
						order={6}
						size="h5"
					>
						Market Cap
					</Title>
					<Text>{`$${value}`}</Text>
				</Stack>
			</Group>
		</Paper>
	);
}

function Volume({ value }) {
	return (
		<Paper
			radius="md"
			p="md"
			bg="#202020"
		>
			<Group>
				<IconDroplet />
				<Stack>
					<Title
						order={6}
						size="h5"
					>
						Volume
					</Title>
					<NumberFormatter
						prefix="$"
						value={value}
						thousandSeparator
					/>
				</Stack>
			</Group>
		</Paper>
	);
}

function PreviousClose({ value }) {
	return (
		<Paper
			radius="md"
			p="md"
			bg="#202020"
		>
			<Group>
				<IconHistory />
				<Stack>
					<Title
						order={6}
						size="h5"
					>
						Previous Close
					</Title>
					<NumberFormatter
						prefix="$"
						value={value}
						thousandSeparator
					/>
				</Stack>
			</Group>
		</Paper>
	);
}

export default function StockBasicFin({ marketCap, volume, prevClose }) {
	return (
		<Stack
			mt="2rem"
			justify="space-between"
			gap="lg"
		>
			<Title
				order={4}
				size="h3"
			>
				Financials <IconSparkles stroke={1.5} />
			</Title>
			<SimpleGrid cols={3}>
				<MarketCap value={marketCap} />
				<Volume value={volume} />
				<PreviousClose value={prevClose} />
			</SimpleGrid>
		</Stack>
	);
}

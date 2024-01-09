"use client";
import {
	Title,
	Text,
	Stack,
	Group,
	NumberFormatter,
	Button,
	Loader,
	rem,
} from "@mantine/core";
import StockChart from "./StockChart";
import { IconBookmark } from "@tabler/icons-react";
import useWatchlist from "@/hooks/useWatchlist";

export function StockMain({ info }) {
	const {
		addToWatchlist,
		watchlistAddSuccess,
		watchlistLoading,
		watchlistError,
	} = useWatchlist();

	console.log(watchlistAddSuccess, watchlistLoading, watchlistError);

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
						onClick={() => {
							addToWatchlist(
								info?.symbol
							);
						}}
						size="xs"
						variant="gradient"
						loading={watchlistLoading}
						disabled={watchlistLoading}
						gradient={{
							from: "blue",
							to: "red",
						}}
						leftSection={
							watchlistLoading ? (
								<Loader
									type="dots"
									size={rem(
										12
									)}
									color="white"
								/>
							) : (
								<IconBookmark
									size={
										12
									}
								/>
							)
						}
					>
						{watchlistLoading
							? "Adding"
							: "Add to Watchlist"}
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
				<StockChart
					height={600}
					ticker={info?.symbol}
				/>
			</div>
		</Stack>
	);
}

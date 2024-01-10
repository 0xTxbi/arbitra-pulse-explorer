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
	Badge,
} from "@mantine/core";
import StockChart from "./StockChart";
import { IconBookmark } from "@tabler/icons-react";
import useWatchlist from "@/hooks/useWatchlist";
import StockBasicFin from "./StockBasicFin";

export function StockMain({ info, ticker, marketInfo }) {
	console.log(marketInfo);

	const {
		addToWatchlist,
		watchlistAddSuccess,
		watchlistLoading,
		watchlistError,
	} = useWatchlist();

	return (
		<Stack
			h="100%"
			justify="space-between"
			gap="lg"
		>
			{/* Stock Basic Details */}

			<Badge
				variant="light"
				size="lg"
				radius="xs"
			>
				{marketInfo?.symbol}
			</Badge>

			<Group justify="space-between">
				<Title
					order={2}
					size="h1"
				>
					{marketInfo?.company}
				</Title>

				{/* add to watchlist button */}
				<Button
					onClick={() => {
						addToWatchlist(info?.symbol);
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
								size={rem(12)}
								color="white"
							/>
						) : (
							<IconBookmark
								size={12}
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

			<NumberFormatter
				prefix="$"
				value={marketInfo?.current_price}
				thousandSeparator
			/>

			<Text size="xl"></Text>
			<StockChart ticker={ticker} />
			{/* stock fin deets */}
			<StockBasicFin
				marketCap={marketInfo?.market_cap}
				volume={marketInfo?.volume}
				prevClose={marketInfo?.previous_close}
			/>
		</Stack>
	);
}

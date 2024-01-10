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
	Skeleton,
	Badge,
} from "@mantine/core";
import StockChart from "./StockChart";
import { IconBookmark } from "@tabler/icons-react";
import useWatchlist from "@/hooks/useWatchlist";
import useStockQuote from "@/hooks/useStockQuote";

export function StockMain({ info, ticker }) {
	const { stockQuoteInfo, stockQuoteLoading, stockQuoteError } =
		useStockQuote(ticker);

	console.log(stockQuoteInfo, stockQuoteLoading, stockQuoteError);

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
				variant="filled"
				size="md"
				radius="xs"
			>
				{info?.symbol}
			</Badge>

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
			{stockQuoteLoading ? (
				<Skeleton
					height={30}
					width="50%"
				/>
			) : (
				<NumberFormatter
					prefix="$"
					value={stockQuoteInfo?.current_price}
					thousandSeparator
				/>
			)}
			<Text size="xl"></Text>
			<StockChart ticker={ticker} />
		</Stack>
	);
}

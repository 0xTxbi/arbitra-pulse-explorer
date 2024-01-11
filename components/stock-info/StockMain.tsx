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
import { useEffect, useState } from "react";

export function StockMain({ info, ticker, marketInfo }) {
	const [existsInWatchlist, setExistsInWatchlist] = useState();

	console.log(marketInfo);

	const {
		addToWatchlist,
		watchlistInfo,

		watchlistAddSuccess,
		watchlistLoading,
		removeFromWatchlist,
		watchlistRemoveLoading,
		watchlistRemoveSuccess,
		watchlistError,
	} = useWatchlist();

	console.log(watchlistInfo);
	console.log(watchlistError);

	const checkIfSymbolExistsInWatchlist = () => {
		const symbolExists = watchlistInfo?.some(
			(item) => item.symbol === marketInfo?.symbol
		);
		setExistsInWatchlist(symbolExists);
	};

	useEffect(() => {
		checkIfSymbolExistsInWatchlist();
	}, [marketInfo, watchlistInfo]);

	return (
		<Stack
			h="100%"
			justify="space-between"
		>
			{/* Stock Basic Details */}

			<Badge
				variant="light"
				size="xl"
				py="1rem"
				radius="sm"
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

				{existsInWatchlist && !watchlistError ? (
					<Button
						onClick={() => {
							removeFromWatchlist(
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
							? "Removing"
							: "Remove from Watchlist"}
					</Button>
				) : (
					<Button
						onClick={() => {
							addToWatchlist(
								info?.symbol
							);
						}}
						size="xs"
						variant="gradient"
						loading={watchlistLoading}
						disabled={
							watchlistLoading ||
							watchlistError
						}
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
				)}
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

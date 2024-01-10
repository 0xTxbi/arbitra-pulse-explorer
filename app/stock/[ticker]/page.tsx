"use client";
import { CompanyInfo } from "@/components/stock-info/CompanyInfo";
import { MarketStats } from "@/components/stock-info/MarketStats";
import { News } from "@/components/stock-info/News";
import { Sentiment } from "@/components/stock-info/Sentiment";
import { StockMain } from "@/components/stock-info/StockMain";
import useStockInfo from "@/hooks/useStockInfo";
import useStockNews from "@/hooks/useStockNews";
import useStockQuote from "@/hooks/useStockQuote";

import { Button, Center, Flex, Grid, Skeleton, Text } from "@mantine/core";

export default function Page({ params }: { params: { ticker: string } }) {
	// stock quote
	const {
		fetchStockQuote,
		stockQuoteInfo,
		stockQuoteLoading,
		stockQuoteError,
	} = useStockQuote(params.ticker);

	console.log(stockQuoteInfo, stockQuoteLoading, stockQuoteError);

	// stock info
	const { stockInfo, stockInfoLoading, stockError } = useStockInfo(
		params.ticker
	);

	// stock news
	const { stockNews, stockNewsLoading, stockNewsError } = useStockNews(
		params.ticker
	);

	const containerStyle = {
		gap: "sm",
		margin: 0,
	};

	const box1Style = {
		flex: "0 0 55%",
	};

	const box2Style = {
		flex: "0 0 40%",
	};

	return stockInfoLoading || stockQuoteLoading ? (
		<Flex
			style={containerStyle}
			direction={{ base: "column", sm: "row" }}
			gap={{ base: "xl", sm: "lg" }}
			justify={{ sm: "center" }}
		>
			<div style={box1Style}>
				<Skeleton
					height="100%"
					width="100%"
				/>
			</div>
			<div style={box2Style}>
				<Grid gutter="xl">
					<Grid.Col span={6}>
						<Skeleton
							height="100%"
							width="100%"
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height={300}
							width="100%"
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height="100%"
							width="100%"
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height={300}
							width="100%"
						/>
					</Grid.Col>
				</Grid>
			</div>
		</Flex>
	) : (
		<Flex
			style={containerStyle}
			direction={{ base: "column", sm: "row" }}
			gap={{ base: "xl", sm: "lg" }}
			justify={{ sm: "center" }}
		>
			<div style={box1Style}>
				{stockQuoteError && (
					<Center>
						<Text>{stockQuoteError}</Text>
						<Button
							onClick={() =>
								fetchStockQuote(
									params.ticker
								)
							}
						>
							Retry
						</Button>
					</Center>
				)}
				<StockMain
					info={stockInfo}
					marketInfo={stockQuoteInfo}
					ticker={params.ticker}
				/>
			</div>
			<div style={box2Style}>
				<Grid gutter="xl">
					<Grid.Col span={6}>
						<Sentiment
							ticker={params.ticker}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<CompanyInfo
							marketInfo={
								stockQuoteInfo
							}
							companyInfo={stockInfo}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<MarketStats
							quickInfo={stockInfo}
							marketInfo={
								stockQuoteInfo
							}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						{stockNewsLoading ? (
							<Skeleton
								height={300}
								width="100%"
							/>
						) : (
							<News
								stockNews={
									stockNews
								}
							/>
						)}
					</Grid.Col>
				</Grid>
			</div>
		</Flex>
	);
}

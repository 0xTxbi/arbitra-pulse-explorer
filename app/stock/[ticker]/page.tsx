"use client";
import { CompanyInfo } from "@/components/stock-info/CompanyInfo";
import { MarketStats } from "@/components/stock-info/MarketStats";
import { News } from "@/components/stock-info/News";
import { Sentiment } from "@/components/stock-info/Sentiment";
import { StockMain } from "@/components/stock-info/StockMain";
import useStockInfo from "@/hooks/useStockInfo";

import { Flex, Grid } from "@mantine/core";
import { useEffect } from "react";

export default function Page({ params }: { params: { ticker: string } }) {
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

	console.log(params.ticker);

	const { stockInfo, stockInfoLoading, stockError } = useStockInfo(
		params.ticker
	);
	console.log(stockInfo, stockInfoLoading, stockError);

	return (
		<Flex style={containerStyle}>
			<div style={box1Style}>
				<StockMain />
			</div>
			<div style={box2Style}>
				<Grid gutter="xl">
					<Grid.Col span={6}>
						<Sentiment />
					</Grid.Col>
					<Grid.Col span={6}>
						<CompanyInfo />
					</Grid.Col>
					<Grid.Col span={6}>
						<MarketStats />
					</Grid.Col>
					<Grid.Col span={6}>
						<News />
					</Grid.Col>
				</Grid>
			</div>
		</Flex>
	);
}

"use client";
import { CompanyInfo } from "@/components/stock-info/CompanyInfo";
import { MarketStats } from "@/components/stock-info/MarketStats";
import { News } from "@/components/stock-info/News";
import { Sentiment } from "@/components/stock-info/Sentiment";
import { StockMain } from "@/components/stock-info/StockMain";
import { Flex, Grid } from "@mantine/core";

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

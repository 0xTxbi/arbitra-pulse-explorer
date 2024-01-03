"use client";

import { CompanyInfo } from "@/components/stock-info/CompanyInfo";
import { MarketStats } from "@/components/stock-info/MarketStats";
import { News } from "@/components/stock-info/News";
import { Sentiment } from "@/components/stock-info/Sentiment";
import { StockMain } from "@/components/stock-info/StockMain";
import useStockInfo from "@/hooks/useStockInfo";

import { Flex, Grid, Skeleton } from "@mantine/core";

export default function Page({ params }: { params: { ticker: string } }) {
	const { stockInfo, stockInfoLoading, stockError } = useStockInfo(
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

	return stockInfoLoading ? (
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
				<StockMain info={stockInfo} />
			</div>
			<div style={box2Style}>
				<Grid gutter="xl">
					<Grid.Col span={6}>
						<Sentiment />
					</Grid.Col>
					<Grid.Col span={6}>
						<CompanyInfo
							companyInfo={stockInfo}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<MarketStats
							quickInfo={stockInfo}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<News />
					</Grid.Col>
				</Grid>
			</div>
		</Flex>
	);
}

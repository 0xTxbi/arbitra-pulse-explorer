"use client";
import { CompanyInfo } from "@/components/stock-info/CompanyInfo";
import { MarketStats } from "@/components/stock-info/MarketStats";
import { StockMain } from "@/components/stock-info/StockMain";
import { Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";

export default function Page({ params }: { params: { ticker: string } }) {
	const PRIMARY_COL_HEIGHT = rem(800);
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

	return (
		<>
			<SimpleGrid
				cols={{ base: 1, sm: 2 }}
				spacing="lg"
			>
				<StockMain />
				<Grid gutter="md">
					<Grid.Col>
						<CompanyInfo />
					</Grid.Col>
					<Grid.Col span={6}>
						<MarketStats />
					</Grid.Col>
					<Grid.Col span={6}>
						<Skeleton
							height={
								SECONDARY_COL_HEIGHT
							}
							radius="md"
							animate={false}
						/>
					</Grid.Col>
				</Grid>
			</SimpleGrid>
		</>
	);
}

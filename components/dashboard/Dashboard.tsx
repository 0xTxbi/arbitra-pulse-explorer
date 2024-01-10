"use client";
import { Container, Grid, Skeleton } from "@mantine/core";
import { Welcome } from "./sections/Welcome";
import { TopGainers } from "./sections/TopGainers";
import { UpcomingEarnings } from "./sections/UpcomingEarnings";

import { DashboardNews } from "./sections/DashboardNews";
import useDashboard from "@/hooks/useDashboard";
import { AboutProject } from "./sections/AboutProject";
import { QuantScrape } from "./sections/QuantScrape";
import { Upcoming } from "./sections/Upcoming";

const DashboardSkeleton = (
	<Skeleton
		height={300}
		radius="md"
	/>
);

export function Dashboard() {
	const { dashboardInfo, dashboardInfoLoading, dashboardInfoError } =
		useDashboard();

	console.log(dashboardInfo, dashboardInfoLoading, dashboardInfoError);

	return (
		<Container
			mt="5rem"
			size="xl"
		>
			{dashboardInfoLoading ? (
				<Grid gutter="xl">
					<Grid.Col span={{ base: 12, xs: 4 }}>
						{DashboardSkeleton}
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 8 }}>
						{DashboardSkeleton}
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 8 }}>
						{DashboardSkeleton}
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 4 }}>
						{DashboardSkeleton}
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 3 }}>
						{DashboardSkeleton}
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 3 }}>
						{DashboardSkeleton}
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6 }}>
						{DashboardSkeleton}
					</Grid.Col>
				</Grid>
			) : (
				<Grid gutter="xl">
					<Grid.Col span={{ base: 12, xs: 4 }}>
						<Welcome />
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 8 }}>
						<TopGainers />
					</Grid.Col>
					<Grid.Col
						span={{ base: 12, xs: 6 }}
						mt="5rem"
					>
						<AboutProject />
					</Grid.Col>
					<Grid.Col
						span={{ base: 12, xs: 6 }}
						mt="5rem"
					>
						<UpcomingEarnings
							upcomingEarningsInfo={
								dashboardInfo?.upcomingEarnings
							}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 3 }}>
						<Upcoming />
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 3 }}>
						<QuantScrape />
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6 }}>
						<DashboardNews
							news={
								dashboardInfo?.watchlistNews
							}
						/>
					</Grid.Col>
				</Grid>
			)}
		</Container>
	);
}

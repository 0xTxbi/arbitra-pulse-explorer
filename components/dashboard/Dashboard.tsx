"use client";
import { Container, Grid, Skeleton } from "@mantine/core";
import { Welcome } from "./sections/Welcome";
import { TopGainers } from "./sections/TopGainers";
import { UpcomingEarnings } from "./sections/UpcomingEarnings";
import { FeaturedStock } from "./sections/FeaturedStock";
import { DashboardNews } from "./sections/DashboardNews";
import { useCookies } from "react-cookie";
import useWatchlist from "@/hooks/useWatchlist";

const child = (
	<Skeleton
		height={300}
		radius="md"
		animate={false}
	/>
);

export function Dashboard() {
	return (
		<Container
			mt="5rem"
			size="xl"
		>
			<Grid gutter="xl">
				<Grid.Col span={{ base: 12, xs: 4 }}>
					<Welcome />
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 8 }}>
					<TopGainers />
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 8 }}>
					<FeaturedStock />
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 4 }}>
					<UpcomingEarnings />
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 3 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 3 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6 }}>
					<DashboardNews />
				</Grid.Col>
			</Grid>
		</Container>
	);
}

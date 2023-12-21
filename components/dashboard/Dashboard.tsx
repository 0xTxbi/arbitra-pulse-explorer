"use client";

import { Container, Grid, Skeleton } from "@mantine/core";

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
			my="md"
			size="xl"
		>
			<Grid>
				<Grid.Col span={{ base: 12, xs: 4 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 8 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 8 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 4 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 3 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 3 }}>
					{child}
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6 }}>
					{child}
				</Grid.Col>
			</Grid>
		</Container>
	);
}

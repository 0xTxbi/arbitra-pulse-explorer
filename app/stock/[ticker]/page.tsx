"use client";
import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";

export default function Page({ params }: { params: { ticker: string } }) {
	const PRIMARY_COL_HEIGHT = rem(800);
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

	return (
		<>
			<SimpleGrid
				cols={{ base: 1, sm: 2 }}
				spacing="lg"
			>
				<Skeleton
					height={PRIMARY_COL_HEIGHT}
					radius="md"
					animate={false}
				/>
				<Grid gutter="md">
					<Grid.Col>
						<Skeleton
							height={
								SECONDARY_COL_HEIGHT
							}
							radius="md"
							animate={false}
						/>
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

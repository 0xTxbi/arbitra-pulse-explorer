"use client";
import {
	Title,
	Text,
	Container,
	SimpleGrid,
	Skeleton,
	Group,
	Anchor,
	Button,
	Loader,
	rem,
} from "@mantine/core";
import classes from "./Watchlist.module.css";

import { WatchlistItem } from "./WatchlistItem";
import useWatchlist from "@/hooks/useWatchlist";
import Link from "next/link";
import { IconTrash } from "@tabler/icons-react";

export function Watchlist() {
	const { watchlistInfo, watchlistLoading, watchlistError } =
		useWatchlist();

	return (
		<Container
			className={classes.wrapper}
			size={1400}
		>
			<div className={classes.inner}>
				<Title
					ta="center"
					className={classes.title}
				>
					your{" "}
					<Text
						component="span"
						variant="gradient"
						gradient={{
							from: "blue",
							to: "red",
						}}
						inherit
					>
						watchlist
					</Text>{" "}
					.
				</Title>

				<Container
					p={0}
					size={600}
				>
					<Text
						size="lg"
						c="dimmed"
						ta="center"
						className={classes.description}
					>
						effortlessly monitor stock
						symbols, track current prices,
						and manage your portfolio — all
						in one place.
					</Text>
				</Container>

				{/* watchlist results */}
				{watchlistLoading ? (
					<SimpleGrid
						cols={3}
						mt="xl"
					>
						<Skeleton
							height={100}
							width={200}
						/>
						<Skeleton
							height={100}
							width={200}
						/>
						<Skeleton
							height={100}
							width={200}
						/>
					</SimpleGrid>
				) : (
					<>
						<Group
							justify="flex-end"
							mt="xl"
						>
							<Button
								onClick={() => {
									// addToWatchlist(
									// 	info?.symbol
									// );
								}}
								size="xs"
								variant="gradient"
								loading={
									watchlistLoading
								}
								disabled={
									watchlistLoading
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
										<IconTrash
											size={
												12
											}
										/>
									)
								}
							>
								Clear Watchlist
							</Button>
						</Group>
						<Group
							justify="center"
							mt="xl"
						>
							{watchlistInfo?.map(
								(
									watchlistItem
								) => (
									<Link
										href={`/stock/${watchlistItem?.symbol}`}
										style={{
											textDecoration:
												"none",
											color: "white",
										}}
									>
										<WatchlistItem
											item={
												watchlistItem
											}
										/>
									</Link>
								)
							)}
						</Group>
					</>
				)}

				{watchlistInfo?.length < 1 && (
					<Container
						size="xs"
						mt="lg"
					>
						<Text ta="center">
							you haven't added any
							stock to your watchlist.
							begin by{" "}
							<Anchor href="/search">
								searching
							</Anchor>{" "}
							for stocks to add to
							your watchlist
						</Text>
					</Container>
				)}
			</div>
		</Container>
	);
}

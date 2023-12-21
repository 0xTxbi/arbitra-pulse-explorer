import { Title, Text, Container } from "@mantine/core";
import classes from "./Watchlist.module.css";

import { Carousel } from "@mantine/carousel";
import { WatchlistItem } from "./WatchlistItem";

export function Watchlist() {
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

				{/* search results */}
				<Container
					mt="xl"
					fluid
				>
					<Carousel
						slideSize="33.333333%"
						slideGap="md"
						loop
						align="center"
						slidesToScroll={1}
					>
						<WatchlistItem />
						<WatchlistItem />
						<WatchlistItem />
					</Carousel>
				</Container>
			</div>
		</Container>
	);
}

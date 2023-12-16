import { Title, Text, Button, Container, Anchor } from "@mantine/core";
import classes from "./Hero.module.css";

export function Hero() {
	return (
		<Container
			className={classes.wrapper}
			size={1400}
		>
			<div className={classes.inner}>
				<Title className={classes.title}>
					your stock and{" "}
					<Text
						component="span"
						variant="gradient"
						gradient={{
							from: "blue",
							to: "red",
						}}
						inherit
					>
						sentiment
					</Text>{" "}
					insights hub.
				</Title>

				<Container
					p={0}
					size={600}
				>
					<Text
						size="lg"
						c="dimmed"
						className={classes.description}
					>
						explore real-time stock
						information and sentiment
						analysis, powered by the{" "}
						<Anchor
							href="https://github.com/0xTxbi/arbitra-pulse"
							target="_blank"
						>
							Arbitra Pulse API
						</Anchor>
						. tailor your experience with
						personalized watchlists and make
						informed decisions effortlessly.
					</Text>
				</Container>

				<div className={classes.controls}>
					<Button
						variant="gradient"
						gradient={{
							from: "blue",
							to: "red",
						}}
						size="sm"
					>
						Get Started
					</Button>
				</div>
			</div>
		</Container>
	);
}

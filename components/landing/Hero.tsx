"use client";

import {
	Title,
	Text,
	Button,
	Container,
	Anchor,
	Badge,
	Center,
	Stack,
	em,
} from "@mantine/core";
import classes from "./Hero.module.css";
import Link from "next/link";
import { IconArrowRight, IconLogin } from "@tabler/icons-react";
import { useMediaQuery } from "@uidotdev/usehooks";

export function Hero() {
	const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
	return (
		<Container
			className={classes.wrapper}
			size={1400}
		>
			<Stack
				align="center"
				gap="xs"
			>
				<Center>
					<Badge
						variant="light"
						rightSection={
							<IconArrowRight
								size={12}
							/>
						}
					>
						<Link
							href="https://github.com/0xTxbi/arbitra-pulse"
							target="_blank"
							style={{
								textDecoration:
									"none",
								color: "inherit",
							}}
						>
							visit the Arbitra Pulse
							docs
						</Link>
					</Badge>
				</Center>
				<Title
					className={classes.title}
					ta={isMobile ? "center" : "center"}
				>
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
						ta={
							isMobile
								? "center"
								: "center"
						}
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
					<Link href="/login">
						<Button
							leftSection={
								<IconLogin
									size={
										12
									}
								/>
							}
							variant="gradient"
							gradient={{
								from: "blue",
								to: "red",
							}}
							size="sm"
						>
							Get Started
						</Button>
					</Link>
				</div>
			</Stack>
		</Container>
	);
}

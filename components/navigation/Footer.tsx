"use client";
import { Anchor, Group, rem, Container, Text, Code } from "@mantine/core";
import { IconCoffee } from "@tabler/icons-react";

import classes from "./Footer.module.css";

export function Footer() {
	return (
		<Container
			size="md"
			className={classes.footer}
		>
			<div className={classes.inner}>
				<Group>
					<Text c="dimmed">
						crafted by{" "}
						<Code>
							<Anchor
								href="https://github.com/0xTxbi"
								c="dimmed"
								lh={1}
								target="_blank"
								size="sm"
							>
								0xTxbi
							</Anchor>
						</Code>{" "}
						with{" "}
						<IconCoffee
							style={{
								width: rem(20),
								height: rem(20),
							}}
							stroke={1.5}
						/>{" "}
						and sleepy eyes.
					</Text>
				</Group>
			</div>
		</Container>
	);
}

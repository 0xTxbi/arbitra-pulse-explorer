"use client";
import { Container, Group } from "@mantine/core";

import classes from "./UnauthNav.module.css";
import { Logo } from "../ui/Logo";

export function UnauthNav() {
	return (
		<div className={classes.header}>
			<Container
				className={classes.mainSection}
				size="xl"
			>
				<Group justify="space-between">
					<Logo />
				</Group>
			</Container>
		</div>
	);
}

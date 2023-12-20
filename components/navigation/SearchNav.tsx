"use client";

import cx from "clsx";
import { useState } from "react";
import {
	Container,
	Avatar,
	UnstyledButton,
	Group,
	Text,
	Menu,
	Burger,
	rem,
	useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
	IconLogout,
	IconSettings,
	IconChevronDown,
	IconBookmark,
} from "@tabler/icons-react";

import classes from "./SearchNav.module.css";
import Logo from "../ui/Logo";

const mockUserData = {
	name: "txbi",
	email: "txbi@arbitra.pulse",
	image: "https://avatars.githubusercontent.com/u/46839250?v=4",
};

export function SearchNav() {
	const theme = useMantineTheme();
	const [opened, { toggle }] = useDisclosure(false);
	const [userMenuOpened, setUserMenuOpened] = useState(false);

	return (
		<div className={classes.header}>
			<Container
				className={classes.mainSection}
				size="xl"
			>
				<Group justify="space-between">
					<Logo />

					<Burger
						opened={opened}
						onClick={toggle}
						hiddenFrom="xs"
						size="sm"
					/>

					<Menu
						width={260}
						onClose={() =>
							setUserMenuOpened(false)
						}
						onOpen={() =>
							setUserMenuOpened(true)
						}
						withinPortal
					>
						<Menu.Target>
							<UnstyledButton
								className={cx(
									classes.user,
									{
										[classes.userActive]:
											userMenuOpened,
									}
								)}
							>
								<Group gap={7}>
									<Avatar
										src={
											mockUserData.image
										}
										alt={
											mockUserData.name
										}
										radius="xl"
										size={
											20
										}
									/>
									<Text
										fw={
											500
										}
										size="sm"
										lh={
											1
										}
										mr={
											3
										}
									>
										{
											mockUserData.name
										}
									</Text>
									<IconChevronDown
										style={{
											width: rem(
												12
											),
											height: rem(
												12
											),
										}}
										stroke={
											1.5
										}
									/>
								</Group>
							</UnstyledButton>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								leftSection={
									<IconBookmark
										style={{
											width: rem(
												16
											),
											height: rem(
												16
											),
										}}
										color={
											theme
												.colors
												.red[6]
										}
										stroke={
											1.5
										}
									/>
								}
							>
								Watchlist
							</Menu.Item>

							<Menu.Label>
								Settings
							</Menu.Label>
							<Menu.Item
								leftSection={
									<IconSettings
										style={{
											width: rem(
												16
											),
											height: rem(
												16
											),
										}}
										stroke={
											1.5
										}
									/>
								}
							>
								Account settings
							</Menu.Item>
							<Menu.Item
								leftSection={
									<IconLogout
										style={{
											width: rem(
												16
											),
											height: rem(
												16
											),
										}}
										stroke={
											1.5
										}
									/>
								}
							>
								Logout
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Container>
		</div>
	);
}

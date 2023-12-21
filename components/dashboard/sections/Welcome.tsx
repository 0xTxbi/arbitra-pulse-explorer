"use client";

import {
	Avatar,
	Button,
	ButtonGroup,
	Skeleton,
	Stack,
	Title,
	Tooltip,
	rem,
} from "@mantine/core";
import {
	IconBookmark,
	IconSearch,
	IconSettingsBolt,
} from "@tabler/icons-react";
import Link from "next/link";

const child = (
	<Skeleton
		height={300}
		radius="md"
		animate={false}
	/>
);

export function Welcome() {
	return (
		<Stack
			h="100%"
			justify="center"
			align="center"
		>
			{/* user avater */}
			<Avatar
				src="https://avatars.githubusercontent.com/u/46839250?v=4"
				size="xl"
			/>

			{/* welcome message */}
			<Title
				order={4}
				size="h5"
			>
				welcome, txbi 👋
			</Title>

			{/* quick actions */}
			<ButtonGroup>
				<Tooltip
					label="Your Watchlist"
					position="bottom"
					transitionProps={{
						transition: "scale-x",
						duration: 300,
					}}
				>
					<Button
						size="xs"
						component={Link}
						href="/watchlist"
					>
						<IconBookmark
							style={{
								width: rem(16),
								height: rem(16),
							}}
							stroke={1.5}
						/>
					</Button>
				</Tooltip>
				<Tooltip
					label="Account Settings"
					position="bottom"
					transitionProps={{
						transition: "scale-x",
						duration: 300,
					}}
				>
					<Button
						size="xs"
						// todo: link account settings page
					>
						<IconSettingsBolt
							style={{
								width: rem(16),
								height: rem(16),
							}}
							stroke={1.5}
						/>
					</Button>
				</Tooltip>
				<Tooltip
					label="Search Stocks"
					position="bottom"
					transitionProps={{
						transition: "scale-x",
						duration: 300,
					}}
				>
					<Button
						size="xs"
						component={Link}
						href="/search"
					>
						<IconSearch
							style={{
								width: rem(16),
								height: rem(16),
							}}
							stroke={1.5}
						/>
					</Button>
				</Tooltip>
			</ButtonGroup>
		</Stack>
	);
}

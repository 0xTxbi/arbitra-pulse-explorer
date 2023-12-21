import {
	ActionIcon,
	Avatar,
	Group,
	Paper,
	Stack,
	Text,
	ThemeIcon,
	rem,
} from "@mantine/core";
import {
	IconArrowUpRight,
	IconCircleMinus,
	IconSearch,
} from "@tabler/icons-react";
import classes from "./Watchlist.module.css";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

export function WatchlistItem() {
	return (
		<Paper
			withBorder
			p="md"
			radius="md"
			w={250}
			mr={15}
			key={data.title}
		>
			<Stack justify="space-between">
				<Group>
					<Avatar
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/2048px-Apple_Store_logo.svg.png"
						alt="company logo"
						size="lg"
					/>
				</Group>
				<Group justify="space-between">
					<div>
						<Text
							c="dimmed"
							tt="uppercase"
							fw={700}
							fz="xs"
							className={
								classes.label
							}
						>
							{data.title}
						</Text>
						<Text
							fw={700}
							fz="xl"
						>
							{data.value}
						</Text>
					</div>
					<ThemeIcon
						color="gray"
						variant="light"
						style={{
							color:
								data.diff > 0
									? "var(--mantine-color-teal-6)"
									: "var(--mantine-color-red-6)",
						}}
						size={38}
						radius="md"
					>
						<IconArrowUpRight
							size="1.4rem"
							stroke={1.5}
						/>
					</ThemeIcon>
				</Group>
				<Group justify="flex-end">
					<ActionIcon variant="default">
						<IconCircleMinus
							style={{
								width: rem(15),
								height: rem(15),
							}}
							stroke={1.5}
						/>
					</ActionIcon>

					<ActionIcon variant="default">
						<IconSearch
							style={{
								width: rem(15),
								height: rem(15),
							}}
							stroke={1.5}
						/>
					</ActionIcon>
				</Group>
			</Stack>
		</Paper>
	);
}

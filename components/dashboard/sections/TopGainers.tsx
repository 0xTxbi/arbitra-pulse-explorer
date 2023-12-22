import {
	ActionIcon,
	Badge,
	Group,
	Paper,
	SimpleGrid,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { IconArrowUpRight, IconPlus } from "@tabler/icons-react";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

function GainerItem() {
	return (
		<Paper
			withBorder
			p="md"
			radius="md"
			key={data.title}
		>
			<Group justify="space-between">
				<div>
					<Text
						c="dimmed"
						tt="uppercase"
						fw={700}
						fz="xs"
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
						size="1.8rem"
						stroke={1.5}
					/>
				</ThemeIcon>
			</Group>
			<Group
				justify="space-between"
				c="dimmed"
				fz="sm"
				mt="md"
			>
				<Badge
					color={data.diff > 0 ? "teal" : "red"}
					radius="sm"
					fw={700}
				>
					{data.diff}%
				</Badge>

				{/* add to watchlist */}
				<ActionIcon
					variant="outline"
					color="teal"
					size="sm"
					aria-label="Settings"
				>
					<IconPlus
						style={{
							width: "70%",
							height: "70%",
						}}
						stroke={1.5}
					/>
				</ActionIcon>
			</Group>
		</Paper>
	);
}

export function TopGainers() {
	return (
		<Stack>
			<Title
				order={4}
				size="h5"
			>
				Today's top gainers
			</Title>
			<SimpleGrid
				cols={{ base: 1, sm: 2, lg: 3 }}
				key={data.title}
			>
				<GainerItem />
				<GainerItem />
				<GainerItem />
			</SimpleGrid>
		</Stack>
	);
}

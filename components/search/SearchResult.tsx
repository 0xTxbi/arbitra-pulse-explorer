import { Group, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconGrowth } from "@tabler/icons-react";
import classes from "./Search.module.css";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

export function SearchResult() {
	return (
		<Paper
			withBorder
			p="md"
			radius="md"
			mr={15}
			key={data.title}
		>
			<Group justify="apart">
				<div>
					<Text
						c="dimmed"
						tt="uppercase"
						fw={700}
						fz="xs"
						className={classes.label}
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
					<IconGrowth
						size="1.8rem"
						stroke={1.5}
					/>
				</ThemeIcon>
			</Group>
			<Text
				c="dimmed"
				fz="sm"
				mt="md"
			>
				<Text
					component="span"
					c={data.diff > 0 ? "teal" : "red"}
					fw={700}
				>
					{data.diff}%
				</Text>{" "}
				{data.diff > 0 ? "increase" : "decrease"}{" "}
				compared to last month
			</Text>
		</Paper>
	);
}

import { Group, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconGrowth } from "@tabler/icons-react";
import classes from "./Search.module.css";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

export function SearchResult({ result }: any) {
	console.log(result);
	return (
		<Paper
			withBorder
			p="md"
			radius="md"
			mr={15}
			key={result?.symbol}
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
						{result?.exchange}
					</Text>
					<Text
						fw={700}
						fz="xl"
					>
						{result?.symbol}
					</Text>
				</div>
				<ThemeIcon
					color="gray"
					variant="light"
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
					fw={700}
				>
					{data.diff}%
				</Text>{" "}
			</Text>
		</Paper>
	);
}

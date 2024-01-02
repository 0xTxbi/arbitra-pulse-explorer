import { Badge, Paper, Stack, Text } from "@mantine/core";

export function WatchlistItem({ item }: any) {
	console.log(item);
	return (
		<Paper
			withBorder
			p="md"
			w={250}
			radius="md"
			mr={15}
			key={item?.symbol}
		>
			<Stack>
				<Badge
					radius="sm"
					variant="light"
					color="teal"
				>
					{item?.exchange}
				</Badge>
				<Text
					fw={700}
					fz="xl"
				>
					{item?.instrumentName}
				</Text>

				<Text
					c="dimmed"
					fz="sm"
				>
					<Text
						component="span"
						fw={700}
					>
						{item?.symbol}
					</Text>{" "}
				</Text>
			</Stack>
		</Paper>
	);
}

import { Badge, Paper, Stack, Text } from "@mantine/core";

export function SearchResult({ result }: any) {
	console.log(result);
	return (
		<Paper
			withBorder
			p="md"
			w={250}
			radius="md"
			mr={15}
			key={result?.symbol}
		>
			<Stack>
				<Badge
					radius="sm"
					variant="light"
					color="teal"
				>
					{result?.exchange}
				</Badge>
				<Text
					fw={700}
					fz="xl"
				>
					{result?.instrumentName}
				</Text>

				<Text
					c="dimmed"
					fz="sm"
				>
					<Text
						component="span"
						fw={700}
					>
						{result?.symbol}
					</Text>{" "}
				</Text>
			</Stack>
		</Paper>
	);
}

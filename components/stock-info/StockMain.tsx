import {
	Title,
	Text,
	Stack,
	Group,
	Image,
	Container,
	NumberFormatter,
} from "@mantine/core";
import NextImage from "next/image";

export function StockMain() {
	return (
		<Stack
			justify="space-between"
			gap="lg"
		>
			{/* Stock Basic Details */}
			<div>
				<Group>
					<Text
						size="sm"
						c="dimmed"
					>
						LMT
					</Text>
				</Group>
				<Title
					order={3}
					size="h3"
				>
					Lockheed Martin Corp.
				</Title>

				{/* stock price */}
				<Text size="xl">
					<NumberFormatter
						prefix="$"
						value={1024}
						thousandSeparator
					/>
				</Text>
			</div>
		</Stack>
	);
}

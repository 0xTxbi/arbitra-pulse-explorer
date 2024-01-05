import {
	Stack,
	Badge,
	RingProgress,
	Center,
	ActionIcon,
	rem,
} from "@mantine/core";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";

interface StockSentimentProps {
	score: number;
	confidenceLevel: number;
}

export function Sentiment({
	stockSentiment,
}: {
	stockSentiment: StockSentimentProps;
}) {
	const score = stockSentiment && stockSentiment.score;
	const color = score > 50 ? "teal" : "red";
	const label = score > 50 ? "positive sentiment" : "negative sentiment";

	return (
		<Center h="100%">
			{/* Stock Sentiment */}
			<Stack align="center">
				<RingProgress
					sections={[
						{
							value: stockSentiment?.score,
							color,
						},
					]}
					label={
						<Center>
							<ActionIcon
								color={
									stockSentiment?.score >
									50
										? "teal"
										: "red"
								}
								variant="light"
								radius="xl"
								size="xl"
							>
								{stockSentiment?.score >
								50 ? (
									<IconCheck
										style={{
											width: rem(
												22
											),
											height: rem(
												22
											),
										}}
									/>
								) : (
									<IconAlertTriangle
										style={{
											width: rem(
												22
											),
											height: rem(
												22
											),
										}}
									/>
								)}
							</ActionIcon>
						</Center>
					}
				/>

				<Badge
					variant="outline"
					color={color}
				>
					{label}
				</Badge>
			</Stack>
		</Center>
	);
}

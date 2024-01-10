import useSentiment from "@/hooks/useSentiment";
import {
	Stack,
	Badge,
	RingProgress,
	Center,
	ActionIcon,
	rem,
	Skeleton,
} from "@mantine/core";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface StockSentimentProps {
	score: number;
	confidenceLevel: number;
}

export function Sentiment({ ticker }) {
	// stock sentiment hook
	const { sentimentInfo, sentimentInfoLoading, sentimentError } =
		useSentiment(ticker);

	const [score, setScore] = useState(null);
	const [color, setColor] = useState("");
	const [label, setLabel] = useState("");

	console.log(sentimentInfo);
	console.log;

	useEffect(() => {
		if (sentimentInfo) {
			setScore(sentimentInfo?.score);
			setColor(sentimentInfo?.score >= 50 ? "teal" : "red");
			setLabel(
				sentimentInfo.score >= 50
					? "positive sentiment"
					: "negative sentiment"
			);
		}
	}, [sentimentInfo]);

	return (
		<Center h="100%">
			{/* Stock Sentiment */}
			{sentimentInfoLoading ? (
				<Skeleton
					height="100%"
					width="100%"
				/>
			) : (
				<Stack align="center">
					<RingProgress
						sections={[
							{
								value:
									sentimentInfo?.score >=
									50
										? 100
										: sentimentInfo?.score,
								color,
							},
						]}
						label={
							<Center>
								<ActionIcon
									color={
										sentimentInfo?.score >=
										50
											? "teal"
											: "red"
									}
									variant="light"
									radius="xl"
									size="xl"
								>
									{sentimentInfo?.score >=
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
			)}
		</Center>
	);
}

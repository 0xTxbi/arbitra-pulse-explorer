import useMarketGainers from "@/hooks/useMarketGainers";
import { truncateText } from "@/utils/truncateText";
import { Carousel } from "@mantine/carousel";
import {
	ActionIcon,
	Badge,
	Group,
	Paper,
	Skeleton,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { IconArrowUpRight, IconPlus } from "@tabler/icons-react";
import { useMemo } from "react";

interface MarketGainer {
	symbol: string;
	company: string;
	price: number;
	percent_change: number;
}

function GainerItem({ marketGainer }: { marketGainer: MarketGainer }) {
	return (
		<Paper
			withBorder
			p="md"
			radius="md"
		>
			<Group justify="space-between">
				<div>
					<Text
						c="dimmed"
						tt="uppercase"
						size="xs"
					>
						{marketGainer.symbol}
					</Text>
					<Text
						fw={700}
						truncate="end"
						size="lg"
					>
						{truncateText(
							marketGainer.company,
							15
						)}
					</Text>

					<Text
						fw={500}
						fz="sm"
					>
						{marketGainer.price}
					</Text>
				</div>
				<ThemeIcon
					color="gray"
					variant="light"
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
					color={3 > 0 ? "teal" : "red"}
					radius="sm"
					fw={700}
				>
					{marketGainer.percent_change}
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
	const { marketGainersInfo, marketGainersLoading, marketGainersError } =
		useMarketGainers();

	const memoizedMarketGainersInfo = useMemo(
		() => marketGainersInfo,
		[marketGainersInfo]
	);

	return (
		<Stack
			justify="space-around"
			h="100%"
		>
			<Title
				order={4}
				size="h4"
			>
				Today's top gainers
			</Title>

			{marketGainersLoading ? (
				<Skeleton
					height="100%"
					width="100%"
				/>
			) : (
				<Carousel
					slideSize={{
						base: "100%",
						sm: "50%",
						md: "33.333333%",
					}}
					slideGap="md"
					loop
					withControls={false}
					align="start"
					slidesToScroll="auto"
				>
					{memoizedMarketGainersInfo?.map(
						(marketGainer) => (
							<Carousel.Slide
								key={
									marketGainer.symbol
								}
							>
								<GainerItem
									marketGainer={
										marketGainer
									}
								/>
							</Carousel.Slide>
						)
					)}
				</Carousel>
			)}
		</Stack>
	);
}

import useMarketGainers from "@/hooks/useMarketGainers";
import { Carousel } from "@mantine/carousel";
import {
	ActionIcon,
	Badge,
	Group,
	Paper,
	SimpleGrid,
	Skeleton,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { IconArrowUpRight, IconPlus } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

function GainerItem({ marketGainer }) {
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
	// auto play carousel
	const autoplay = useRef(Autoplay({ delay: 2000 }));
	const { marketGainersInfo, marketGainersLoading, marketGainersError } =
		useMarketGainers();

	console.log(
		marketGainersInfo,
		marketGainersLoading,
		marketGainersError
	);

	return (
		<Stack>
			<Title
				order={4}
				size="h5"
			>
				Today's top gainers
			</Title>
			{marketGainersLoading ? (
				<Skeleton
					height={200}
					width="100%"
				/>
			) : (
				<Carousel
					height={200}
					plugins={[autoplay.current]}
					slideSize={{
						base: "100%",
						sm: "50%",
						md: "33.333333%",
					}}
					slideGap={{ base: 0, sm: "md" }}
					loop
					align="start"
					slidesToScroll="auto"
				>
					{marketGainersInfo?.map(
						(marketGainer) => (
							<Carousel.Slide>
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

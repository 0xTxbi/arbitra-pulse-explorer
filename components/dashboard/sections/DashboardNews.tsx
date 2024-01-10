import {
	Badge,
	Divider,
	Grid,
	GridCol,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import { IconClock, IconNews, IconUser } from "@tabler/icons-react";
import { EmptyNews } from "./EmptyNews";
import Link from "next/link";

function NewsItem({ newsItem }) {
	return (
		<Stack p={0}>
			<Grid>
				<GridCol span={8}>
					<Stack>
						{/* news metadata */}
						<Group>
							<Badge
								variant="transparent"
								leftSection={
									<IconUser
										size={
											12
										}
									/>
								}
							>
								{
									newsItem.creator
								}
							</Badge>
							<Badge
								variant="transparent"
								leftSection={
									<IconClock
										size={
											12
										}
									/>
								}
							>
								{
									newsItem.pubDate
								}
							</Badge>
						</Group>

						{/* headline */}
						<Link
							href={newsItem.link}
							target="_blank"
							style={{
								textDecoration:
									"none",
								color: "inherit",
							}}
						>
							<Title
								order={4}
								size="h5"
							>
								{newsItem.title}
							</Title>
						</Link>
					</Stack>
				</GridCol>
				<GridCol span={4}>
					<Image
						radius="md"
						width={100}
						height={100}
						src={newsItem.image}
						alt="news featured image"
					/>
				</GridCol>
			</Grid>
			<Divider />
		</Stack>
	);
}

export function DashboardNews({ news }) {
	return (
		<Stack justify="space-between">
			<Title
				order={4}
				size="h4"
			>
				Todays News{" "}
				<IconNews
					size={15}
					stroke={1}
				/>
			</Title>

			{news?.length >= 1 && (
				<Text
					size="sm"
					c="dimmed"
				>
					todays news specially curated for your
					interests and watchlist.
				</Text>
			)}

			{news?.map((newsItem) => (
				<NewsItem newsItem={newsItem} />
			))}

			{news?.length < 1 && <EmptyNews />}
		</Stack>
	);
}

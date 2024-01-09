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
import NextImage from "next/image";
import { IconClock, IconUser } from "@tabler/icons-react";

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
						<Title
							order={4}
							size="h5"
						>
							{newsItem.title}
						</Title>
					</Stack>
				</GridCol>
				<GridCol span={4}>
					<Image
						component={NextImage}
						radius="md"
						width={100}
						height={100}
						src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEBzCXut4G7TOvskZ695WqAgzdKC47nanCxwvmhxjrHPqy45I4TJzf0io3wVk"
						alt="news featured image"
					/>
				</GridCol>
			</Grid>
			<Divider />
		</Stack>
	);
}

export function DashboardNews({ news }) {
	console.log(news);
	return (
		<Stack justify="space-between">
			<Title
				order={4}
				size="h4"
			>
				Todays News
			</Title>
			<Text
				size="sm"
				c="dimmed"
			>
				todays news specially curated for your interests
				and watchlist.
			</Text>

			{news?.map((newsItem) => (
				<NewsItem newsItem={newsItem} />
			))}
		</Stack>
	);
}

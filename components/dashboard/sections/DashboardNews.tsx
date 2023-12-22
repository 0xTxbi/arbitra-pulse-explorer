import { CompanyInfo } from "@/components/stock-info/CompanyInfo";
import StockChart from "@/components/stock-info/StockChart";
import {
	Avatar,
	Badge,
	Divider,
	Flex,
	Grid,
	GridCol,
	Group,
	Image,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import NextImage from "next/image";
import { IconCategory, IconClock, IconUser } from "@tabler/icons-react";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

function NewsItem() {
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
								Business Insider
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
								7 hours ago
							</Badge>
						</Group>

						{/* headline */}
						<Title
							order={4}
							size="h5"
						>
							Pound jumps as Bank of
							England warns no
							interest rate cuts
							coming soon
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

export function DashboardNews() {
	return (
		<Stack>
			<Title
				order={4}
				size="h5"
			>
				Today's News
			</Title>
			<NewsItem />
			<NewsItem />
		</Stack>
	);
}

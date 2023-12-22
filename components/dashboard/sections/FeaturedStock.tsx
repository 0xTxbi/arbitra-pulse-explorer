import { CompanyInfo } from "@/components/stock-info/CompanyInfo";
import StockChart from "@/components/stock-info/StockChart";
import { Avatar, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";

const data = { title: "AAPL", value: "$1,500", diff: 34 };

export function FeaturedStock() {
	return (
		<Stack>
			<Title
				order={4}
				size="h5"
			>
				Featured Stock
			</Title>
			<SimpleGrid
				cols={2}
				spacing="xl"
			>
				{/* company info */}
				<Stack>
					<Avatar
						size="md"
						src="https://static.vecteezy.com/system/resources/previews/020/336/735/original/tesla-logo-tesla-icon-transparent-png-free-vector.jpg"
					/>
					<Title
						order={5}
						size="h5"
					>
						Tesla, Inc
					</Title>

					<Group>
						<Text
							size="sm"
							c="dimmed"
						>
							Tesla, Inc. is an
							American multinational
							automotive and clean
							energy company
							headquartered in Austin,
							Texas, which designs and
							manufactures electric
							vehicles, stationary
							battery energy storage
							devices from home to
							grid-scale, solar panels
							and solar shingles, and
							related products and
							services.
						</Text>
					</Group>
				</Stack>
				<StockChart
					height={300}
					width={300}
				/>
			</SimpleGrid>
		</Stack>
	);
}

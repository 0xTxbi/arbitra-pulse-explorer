import { Title, Stack } from "@mantine/core";
import { StatInfo } from "./StatInfo";
import { formatDate } from "@/utils/formatDate";

export function MarketStats({ quickInfo, marketInfo }) {
	const formattedDate = formatDate(quickInfo?.listDate);
	return (
		<Stack
			justify="flex-end"
			h={"100%"}
		>
			{/* Stock Basic Details */}
			<Stack mt="4rem">
				<Title
					order={4}
					size="h4"
				>
					Quick Info
				</Title>
				{/* company info */}
				<StatInfo
					title="Date Listed"
					value={formattedDate}
				/>

				<StatInfo
					title="Employees"
					value={quickInfo?.totalEmployees}
				/>
				<StatInfo
					title="Address"
					value={quickInfo?.address}
				/>
			</Stack>
		</Stack>
	);
}

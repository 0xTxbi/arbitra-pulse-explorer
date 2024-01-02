import { Title, Stack } from "@mantine/core";
import { StatInfo } from "./StatInfo";

export function MarketStats({ quickInfo }) {
	return (
		<Stack
			justify="space-between"
			gap="lg"
		>
			{/* Stock Basic Details */}
			<Stack>
				<Title
					order={4}
					size="h4"
				>
					Quick Info
				</Title>
				{/* company info */}
				<StatInfo
					title="Market Cap"
					value={quickInfo?.marketCap}
					isCurrency
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

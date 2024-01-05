import useWatchlist from "@/hooks/useWatchlist";
import { ActionIcon, Group, Paper, Stack, Text } from "@mantine/core";
import { IconMinus } from "@tabler/icons-react";
import Link from "next/link";

export function WatchlistItem({ item }: any) {
	const {
		removeFromWatchlist,
		watchlistRemoveSuccess,
		watchlistRemoveLoading,
	} = useWatchlist();

	console.log(item);
	return (
		<Paper
			withBorder
			p="md"
			w={250}
			radius="md"
			key={item?.symbol}
		>
			<Stack>
				<Link
					href={`/stock/${item?.symbol}`}
					style={{
						textDecoration: "none",
						color: "white",
					}}
				>
					<Text
						fw={700}
						fz="xl"
					>
						{item?.symbol}
					</Text>
				</Link>

				<Group justify="flex-end">
					<ActionIcon
						onClick={() => {
							removeFromWatchlist(
								item?.symbol
							);
						}}
						disabled={
							watchlistRemoveLoading
						}
						loading={watchlistRemoveLoading}
						variant="outline"
						color="red"
						radius="xl"
					>
						<IconMinus size={10} />
					</ActionIcon>
				</Group>
			</Stack>
		</Paper>
	);
}

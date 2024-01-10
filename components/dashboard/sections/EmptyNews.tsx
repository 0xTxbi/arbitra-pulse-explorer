import { CustomContainer } from "@/components/ui/CustomContainer";
import { Center, Stack, Text } from "@mantine/core";

import { IconMoodLookRight } from "@tabler/icons-react";

export function EmptyNews() {
	return (
		<CustomContainer>
			<Stack gap="lg">
				<Text
					ta="center"
					size="sm"
				>
					wow ... such empty
				</Text>
				<Center mb={5}>
					<IconMoodLookRight
						size={50}
						stroke={1}
					/>
				</Center>

				<Text
					ta="center"
					size="sm"
				>
					add stocks to your watchlist to curate
					your personalised news feed
				</Text>
			</Stack>
		</CustomContainer>
	);
}

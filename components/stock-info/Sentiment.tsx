import {
	Stack,
	Badge,
	RingProgress,
	Center,
	ActionIcon,
	rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export function Sentiment() {
	return (
		<Center h="100%">
			{/* Stock Sentiment */}
			<Stack align="center">
				<RingProgress
					sections={[
						{
							value: 100,
							color: "teal",
						},
					]}
					label={
						<Center>
							<ActionIcon
								color="teal"
								variant="light"
								radius="xl"
								size="xl"
							>
								<IconCheck
									style={{
										width: rem(
											22
										),
										height: rem(
											22
										),
									}}
								/>
							</ActionIcon>
						</Center>
					}
				/>

				<Badge
					variant="outline"
					color="teal"
				>
					positive sentiment
				</Badge>
			</Stack>
		</Center>
	);
}

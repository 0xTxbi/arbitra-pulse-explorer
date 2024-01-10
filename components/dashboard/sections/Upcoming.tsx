import {
	Badge,
	Center,
	Divider,
	Grid,
	GridCol,
	Image,
	Paper,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import NextImage from "next/image";
import { IconUser } from "@tabler/icons-react";

export function Upcoming() {
	return (
		<Paper
			shadow="md"
			p="xl"
			w="100%"
			radius="md"
			style={{
				height: "100%",
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://img.freepik.com/free-vector/abstract-blur-background_1048-10914.jpg?w=1380&t=st=1704913747~exp=1704914347~hmac=211fa373e0264efd63493bc6e70cb2c9802c62ba15591143247353d19a0b716e)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Center h="100%">
				<Stack align="center">
					<Title
						order={3}
						size="h4"
						lineClamp={1}
					>
						Coming Soon
					</Title>

					<Text
						size="xs"
						lineClamp={3}
						ta="center"
					>
						Unlock crypto news and sentiment
						analysis—expanding soon!
					</Text>
				</Stack>
			</Center>
		</Paper>

		// <Stack p={0}>
		// 	<Grid>
		// 		<GridCol span={8}>
		// 			<Stack>
		// 				{/* news metadata */}

		// 				<Badge
		// 					variant="transparent"
		// 					leftSection={
		// 						<IconUser
		// 							size={
		// 								12
		// 							}
		// 						/>
		// 					}
		// 				>
		// 					Coming Soon
		// 				</Badge>

		// 				{/* headline */}
		// 				<Title
		// 					order={4}
		// 					size="h5"
		// 				>
		// 					Crypto Insights
		// 				</Title>
		// 				<Text size="sm">
		// 					Unlock crypto news and
		// 					sentiment
		// 					analysis—expanding soon!
		// 				</Text>
		// 			</Stack>
		// 		</GridCol>
		// 		<GridCol span={4}>
		// 			<Image
		// 				component={NextImage}
		// 				radius="md"
		// 				width={100}
		// 				height={100}
		// 				src="https://img.freepik.com/free-vector/abstract-blur-background_1048-10914.jpg?w=1380&t=st=1704913747~exp=1704914347~hmac=211fa373e0264efd63493bc6e70cb2c9802c62ba15591143247353d19a0b716e"
		// 				alt="blur abstract background"
		// 			/>
		// 		</GridCol>
		// 	</Grid>
		// 	<Divider />
		// </Stack>
	);
}

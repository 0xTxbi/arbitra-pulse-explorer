import { Button, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconBook, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export function AboutProject() {
	return (
		<Stack>
			<Title
				order={4}
				size="h4"
			>
				Arbitra Pulse
			</Title>
			<SimpleGrid
				cols={{ base: 1, sm: 1, lg: 2 }}
				spacing="xl"
			>
				{/* company info */}
				<Stack>
					<Group>
						<Text
							size="sm"
							c="dimmed"
						>
							Arbitra Pulse Explorer
							relies on, Arbitra
							Pulse, a harmonious
							synergy of meticulously
							crafted microservices,
							orchestrating a symphony
							of real-time stock
							insights, sentiment
							analysis, and
							personalized user
							experiences.
						</Text>
					</Group>
				</Stack>
				<Stack>
					<Group gap="md">
						<Button
							disabled
							variant="light"
							color="teal"
							leftSection={
								<IconBook
									size={
										12
									}
								/>
							}
						>
							Docs
						</Button>
						<Button
							component={Link}
							href="https://github.com/0xTxbi/arbitra-pulse"
							target="_blank"
							variant="light"
							leftSection={
								<IconBrandGithub
									size={
										12
									}
								/>
							}
						>
							Github
						</Button>
					</Group>
				</Stack>
			</SimpleGrid>
		</Stack>
	);
}

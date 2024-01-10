import { Button, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconBook, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export function QuantScrape() {
	return (
		<Stack>
			<Title
				order={4}
				size="h4"
			>
				QuantScrape
			</Title>

			{/* tool info */}
			<Text
				size="sm"
				c="dimmed"
			>
				QuantScrape leverages artificial intelligence to
				provide a sophisticated and intelligent approach
				to web scraping. This ensures accuracy and
				efficiency in gathering essential financial
				information.
			</Text>

			<Group gap="md">
				<Button
					variant="light"
					color="red"
					leftSection={<IconBook size={12} />}
				>
					Docs
				</Button>
				<Button
					component={Link}
					href="https://github.com/0xTxbi/QuantScrape"
					target="_blank"
					variant="light"
					leftSection={
						<IconBrandGithub size={12} />
					}
				>
					Github
				</Button>
			</Group>
		</Stack>
	);
}

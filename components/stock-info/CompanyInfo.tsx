import { Title, Text, Stack, Group, Badge } from "@mantine/core";
import { IconWorld } from "@tabler/icons-react";
import Link from "next/link";

export function CompanyInfo({ companyUrl, description }) {
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
					About
				</Title>

				<Badge
					component={Link}
					href={companyUrl}
					target="_blank"
					style={{
						cursor: "pointer",
					}}
					leftSection={<IconWorld size={15} />}
				>
					{companyUrl}
				</Badge>

				<Group>
					<Text
						size="sm"
						c="dimmed"
					>
						{description}
					</Text>
				</Group>
			</Stack>
		</Stack>
	);
}

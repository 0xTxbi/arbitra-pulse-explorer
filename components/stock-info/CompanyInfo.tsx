"use client";

import { extractDomain } from "@/utils/extractDomain";
import { Title, Text, Stack, Group, Badge } from "@mantine/core";
import { IconWorld } from "@tabler/icons-react";
import Link from "next/link";

export function CompanyInfo({ companyInfo }) {
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
					href={`${companyInfo?.homepageUrl}`}
					target="_blank"
					style={{
						cursor: "pointer",
					}}
					leftSection={<IconWorld size={15} />}
				>
					{extractDomain(
						companyInfo?.homepageUrl
					)}
				</Badge>

				<Group>
					<Text
						size="sm"
						c="dimmed"
					>
						{companyInfo?.description}
					</Text>
				</Group>
			</Stack>
		</Stack>
	);
}

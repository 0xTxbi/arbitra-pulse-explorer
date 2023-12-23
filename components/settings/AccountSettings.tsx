"use client";

import { Container, Tabs, Title } from "@mantine/core";
import React from "react";
import { ProfileInformation } from "./sections/ProfileInformation";
import {
	IconBellCog,
	IconKey,
	IconUser,
	IconUserCog,
	IconUserX,
} from "@tabler/icons-react";

export default function AccountSettings() {
	return (
		<Container
			my="md"
			size="xl"
		>
			<Title
				order={2}
				size="h3"
			>
				Account Settings
			</Title>
			{/* sections */}
			<Tabs
				defaultValue="gallery"
				mt="xl"
				orientation="vertical"
			>
				<Tabs.List>
					<Tabs.Tab
						value="profile-information"
						leftSection={
							<IconUserCog
								size={12}
							/>
						}
					>
						Profile Information
					</Tabs.Tab>
					<Tabs.Tab
						value="password"
						leftSection={
							<IconKey size={12} />
						}
					>
						Update Password
					</Tabs.Tab>
					<Tabs.Tab
						value="notifications"
						leftSection={
							<IconBellCog
								size={12}
							/>
						}
					>
						Notifications
					</Tabs.Tab>
					<Tabs.Tab
						value="deactivation"
						leftSection={
							<IconUserX size={12} />
						}
					>
						Deactivation
					</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel
					value="profile-information"
					pl={10}
				>
					<ProfileInformation />
				</Tabs.Panel>
			</Tabs>
		</Container>
	);
}

"use client";
import { Container, Tabs, Title } from "@mantine/core";
import { ProfileInformation } from "./sections/ProfileInformation";
import {
	IconBellCog,
	IconKey,
	IconUserCog,
	IconUserX,
} from "@tabler/icons-react";
import { UpdatePassword } from "./sections/UpdatePassword";

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
				defaultValue="profile-information"
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
						value="update-password"
						leftSection={
							<IconKey size={12} />
						}
					>
						Update Password
					</Tabs.Tab>
					<Tabs.Tab
						value="notifications"
						disabled
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
						disabled
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
				<Tabs.Panel
					value="update-password"
					pl={10}
				>
					<UpdatePassword />
				</Tabs.Panel>
			</Tabs>
		</Container>
	);
}

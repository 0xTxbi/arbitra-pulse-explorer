import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
// carousel style
import "@mantine/carousel/styles.css";
// notifications style
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

export const metadata = {
	title: "Arbitra Pulse Explorer",
	description:
		"a seamless and intuitive interface for exploring real-time stock sentiments and related information via the Arbitra Pulse API.",
};

export default function RootLayout({ children }: { children: any }) {
	return (
		<html
			lang="en"
			// dark theme support for users with javascript-disabled user agents
			data-mantine-color-scheme="dark"
		>
			<head>
				<ColorSchemeScript />
				<link rel="shortcut icon" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body>
				<MantineProvider
					theme={theme}
					defaultColorScheme="dark"
				>
					<Notifications />
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}

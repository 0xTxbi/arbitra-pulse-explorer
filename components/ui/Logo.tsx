import { Text } from "@mantine/core";
import Link from "next/link";

export default function Logo() {
	return (
		<Text
			component={Link}
			href="/"
			size="xl"
			fw={900}
			variant="gradient"
			gradient={{ from: "blue", to: "red", deg: 90 }}
		>
			ArbitraPulse
		</Text>
	);
}

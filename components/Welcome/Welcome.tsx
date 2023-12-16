import { Title, Text, Anchor } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
	return (
		<>
			<Title
				className={classes.title}
				ta="center"
				mt={100}
			>
				this is{" "}
				<Text
					inherit
					variant="gradient"
					component="span"
					gradient={{
						from: "green",
						to: "blue",
					}}
				>
					Arbitra Pulse
				</Text>
				.
			</Title>
			<Text
				c="dimmed"
				ta="center"
				size="lg"
				maw={580}
				mx="auto"
				mt="xl"
			>
				a seamless and intuitive interface for exploring
				real-time stock sentiments and related
				information. leverages the{" "}
				<Anchor
					href="https://github.com/0xTxbi/arbitra-pulse"
					size="lg"
					target="_blank"
				>
					Arbitra Pulse API
				</Anchor>
				.
			</Text>
		</>
	);
}

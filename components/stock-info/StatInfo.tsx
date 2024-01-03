import { Title, Text, Group, NumberFormatter, Divider } from "@mantine/core";

interface StatInfoProps {
	title: string;
	value: number | string;
	isCurrency?: boolean;
}

export function StatInfo({ title, value, isCurrency }: StatInfoProps) {
	return (
		<>
			<Group justify="space-between">
				<Title
					order={6}
					size="h6"
					c="dimmed"
				>
					{title}
				</Title>
				<Text size="sm">
					{typeof value === "number" ? (
						isCurrency ? (
							<NumberFormatter
								prefix="$"
								value={value}
								thousandSeparator
							/>
						) : (
							<NumberFormatter
								value={value}
								thousandSeparator
							/>
						)
					) : (
						<Text>{value}</Text>
					)}
				</Text>
			</Group>
			<Divider />
		</>
	);
}

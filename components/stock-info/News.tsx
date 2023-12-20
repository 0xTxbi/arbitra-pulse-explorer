import { Carousel } from "@mantine/carousel";
import { Paper, Text, Title, Button, Stack } from "@mantine/core";

interface CardProps {
	image: string;
	title: string;
	category: string;
}

function Card({ image, title, category }: CardProps) {
	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			style={{
				height: "100%",
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Stack justify="space-between">
				<Text size="xs">{category}</Text>
				<Title
					order={3}
					size="h2"
				>
					{title}
				</Title>
				<Button
					variant="gradient"
					gradient={{
						from: "blue",
						to: "red",
					}}
					color="dark"
				>
					Read
				</Button>
			</Stack>
		</Paper>
	);
}

const data = [
	{
		image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		title: "Hawaii beaches review: better than you think",
		category: "beach",
	},
	{
		image: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		title: "Mountains at night: 12 best locations to enjoy the view",
		category: "nature",
	},
	{
		image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
		title: "Aurora in Norway: when to visit for best experience",
		category: "nature",
	},
];

export function News() {
	const slides = data.map((item) => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
		<Stack>
			<Title
				order={4}
				size="h4"
			>
				News
			</Title>
			<Carousel>{slides}</Carousel>
		</Stack>
	);
}

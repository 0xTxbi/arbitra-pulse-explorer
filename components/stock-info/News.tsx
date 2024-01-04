import { Carousel } from "@mantine/carousel";
import { Paper, Text, Title, Button, Stack } from "@mantine/core";
import Link from "next/link";

interface CardProps {
	image: string;
	title: string;
	category: string;
	link: string;
	author: string;
	description: string;
}

function Card({
	image,
	title,
	author,
	description,
	category,
	link,
}: CardProps) {
	return (
		<Paper
			shadow="md"
			p="xl"
			w="100%"
			radius="md"
			style={{
				height: "100%",
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Stack justify="space-between">
				<Text size="xs">{category}</Text>
				<Title
					order={3}
					size="h5"
					lineClamp={1}
				>
					{title}
				</Title>
				<Text
					size="xs"
					lineClamp={3}
				>
					{description}
				</Text>
				<Button
					component={Link}
					href={link}
					target="_blank"
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

export function News({ stockNews }) {
	const slides = stockNews?.map((news) => (
		<Carousel.Slide key={news.article_id}>
			<Card {...news} />
		</Carousel.Slide>
	));

	return (
		<Stack
			w={300}
			gap="xl"
		>
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

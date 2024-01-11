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
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
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
					size="xs"
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

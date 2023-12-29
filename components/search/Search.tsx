"use client";

import { Title, Text, Container, Skeleton, SimpleGrid } from "@mantine/core";
import classes from "./Search.module.css";
import { SearchInput } from "./SearchInput";
import { SearchResult } from "./SearchResult";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import { useStockSearch } from "@/hooks/useStockSearch";

export function Search() {
	const [searchResult, setSearchResult] = useState(null);
	const [searchLoading, setSearchLoading] = useState(false);
	const { searchStock } = useStockSearch(setSearchLoading);

	console.log(`we are loading ${searchLoading}`);

	const handleSearch = (result) => {
		setSearchResult(result);
	};

	return (
		<Container
			className={classes.wrapper}
			size={1400}
		>
			<div className={classes.inner}>
				<Title
					ta="center"
					className={classes.title}
				>
					explore{" "}
					<Text
						component="span"
						variant="gradient"
						gradient={{
							from: "blue",
							to: "red",
						}}
						inherit
					>
						stock
					</Text>{" "}
					information
					<Text
						component="span"
						variant="gradient"
						gradient={{
							from: "red",
							to: "blue",
						}}
						inherit
					>
						.
					</Text>
				</Title>

				<Container
					p={0}
					size={600}
				>
					<Text
						size="lg"
						c="dimmed"
						ta="center"
						className={classes.description}
					>
						discover real-time stock
						insights and trends. enter a
						stock symbol or company name in
						the search bar below to access
						detailed information.
					</Text>
				</Container>

				{/* search input */}
				<div className={classes.searchSection}>
					<SearchInput
						onSearch={handleSearch}
						searchStock={searchStock}
						searchLoading={searchLoading}
					/>
				</div>

				{/* search results */}
				<Container>
					{searchLoading ? (
						<SimpleGrid cols={3}>
							<Skeleton
								height={125}
								width={287}
							/>
							<Skeleton
								height={125}
								width={287}
							/>
							<Skeleton
								height={125}
								width={287}
							/>
						</SimpleGrid>
					) : (
						<Carousel
							slideSize="33.333333%"
							slideGap="md"
							loop
							align="start"
							slidesToScroll={1}
						>
							<SearchResult
								result={
									searchResult
								}
							/>
							<SearchResult
								result={
									searchResult
								}
							/>
							<SearchResult
								result={
									searchResult
								}
							/>
						</Carousel>
					)}
				</Container>
			</div>
		</Container>
	);
}

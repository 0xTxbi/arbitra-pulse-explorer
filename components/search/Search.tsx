"use client";
import {
	Title,
	Text,
	Container,
	Skeleton,
	SimpleGrid,
	Group,
} from "@mantine/core";

import { SearchInput } from "./SearchInput";
import { SearchResult } from "./SearchResult";
import { useState } from "react";
import { useStockSearch } from "@/hooks/useStockSearch";

export function Search() {
	const [searchResult, setSearchResult] = useState(null);
	const [searchLoading, setSearchLoading] = useState<boolean | null>(
		null
	);
	const { searchStock } = useStockSearch(setSearchLoading);

	console.log(`we are loading ${searchLoading}`);

	const handleSearch = (result: any) => {
		setSearchResult(result);
	};

	console.log(searchResult);

	return (
		<Container size="xl">
			<div>
				<Title
					ta="center"
					mb="md"
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
					mb="lg"
					p={0}
					size={600}
				>
					<Text
						size="lg"
						c="dimmed"
						ta="center"
					>
						discover real-time stock
						insights and trends. enter a
						stock symbol or company name in
						the search bar below to access
						detailed information.
					</Text>
				</Container>

				{/* search input */}

				<Container>
					<SearchInput
						onSearch={handleSearch}
						searchStock={searchStock}
						searchLoading={searchLoading}
					/>
				</Container>

				{/* search results */}
				<Container>
					{searchLoading ? (
						<SimpleGrid
							cols={3}
							mt="xl"
						>
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
						<Group
							justify="center"
							mt="xl"
						>
							{searchResult?.stocks?.map(
								(result) => (
									<SearchResult
										result={
											result
										}
									/>
								)
							)}
						</Group>
					)}

					{searchResult?.stocks?.length < 1 && (
						<Text ta="center">
							oops. no stocks found.
							try another keyword
						</Text>
					)}
				</Container>
			</div>
		</Container>
	);
}

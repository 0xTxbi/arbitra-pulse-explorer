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
import Link from "next/link";

export function Search() {
	const [searchResult, setSearchResult] = useState(null);
	const [searchLoading, setSearchLoading] = useState<boolean | null>(
		null
	);
	const { searchStock } = useStockSearch(setSearchLoading);

	const handleSearch = (result: any) => {
		setSearchResult(result);
	};

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

				<Container
					fluid
					size="lg"
				>
					<SearchInput
						onSearch={handleSearch}
						searchStock={searchStock}
						searchLoading={searchLoading}
					/>
				</Container>

				{/* search results */}

				{searchLoading ? (
					<SimpleGrid
						cols={3}
						mt="xl"
					>
						<Skeleton
							height={100}
							width={200}
						/>
						<Skeleton
							height={100}
							width={200}
						/>
						<Skeleton
							height={100}
							width={200}
						/>
					</SimpleGrid>
				) : (
					<Group
						justify="center"
						mt="xl"
					>
						{searchResult?.stocks?.map(
							(result) => (
								<Link
									href={`/stock/${result?.symbol}`}
									style={{
										textDecoration:
											"none",
										color: "white",
									}}
								>
									<SearchResult
										result={
											result
										}
									/>
								</Link>
							)
						)}
					</Group>
				)}

				{searchResult?.stocks?.length < 1 && (
					<Text ta="center">
						oops. no stocks found. try
						another keyword
					</Text>
				)}
			</div>
		</Container>
	);
}

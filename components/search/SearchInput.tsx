"use client";
import { TextInput, ActionIcon, rem, Loader } from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import { ChangeEvent, FC, useState } from "react";

interface SearchInputProps {
	onSearch: (value: string) => void;
	searchStock: (query: string) => Promise<any>;
	searchLoading: boolean;
	[key: string]: any;
}

export const SearchInput: FC<SearchInputProps> = ({
	onSearch,
	searchStock,
	searchLoading,
	...props
}) => {
	const [searchValue, setSearchValue] = useState("");

	// search for stock
	const handleSearch = async () => {
		const searchResult = await searchStock(searchValue);

		console.log(searchResult);
		onSearch(searchResult);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<TextInput
			radius="xl"
			size="lg"
			placeholder="Apple, Tesla, Lockheed Martin"
			rightSectionWidth={42}
			onChange={handleChange}
			disabled={searchLoading}
			leftSection={
				<IconSearch
					style={{
						width: rem(18),
						height: rem(18),
					}}
					stroke={1.5}
				/>
			}
			rightSection={
				<ActionIcon
					onClick={handleSearch}
					size={32}
					radius="xl"
					variant="gradient"
					disabled={
						searchLoading ||
						searchValue.length < 1
					}
					gradient={{
						from: "red",
						to: "blue",
					}}
				>
					{searchLoading ? (
						<Loader
							size={rem(18)}
							color="white"
						/>
					) : (
						<IconArrowRight
							style={{
								width: rem(18),
								height: rem(18),
							}}
							stroke={1.5}
						/>
					)}
				</ActionIcon>
			}
			{...props}
		/>
	);
};

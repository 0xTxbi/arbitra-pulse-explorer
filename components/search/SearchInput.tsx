"use client";

import {
	TextInput,
	TextInputProps,
	ActionIcon,
	rem,
	useCombobox,
	Combobox,
	Loader,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import { useRef, useState } from "react";

export function SearchInput(props: TextInputProps) {
	// mock search results
	const MOCKDATA = ["Apple Inc", "Tesla", "Lockheed Martin"];

	function getAsyncData(searchQuery: string, signal: AbortSignal) {
		return new Promise<string[]>((resolve, reject) => {
			signal.addEventListener("abort", () => {
				reject(new Error("Request aborted"));
			});

			setTimeout(() => {
				resolve(
					MOCKDATA.filter((item) =>
						item
							.toLowerCase()
							.includes(
								searchQuery.toLowerCase()
							)
					).slice(0, 5)
				);
			}, Math.random() * 1000);
		});
	}

	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<string[] | null>(null);
	const [value, setValue] = useState("");
	const [empty, setEmpty] = useState(false);
	const abortController = useRef<AbortController>();

	const fetchOptions = (query: string) => {
		abortController.current?.abort();
		abortController.current = new AbortController();
		setLoading(true);

		getAsyncData(query, abortController.current.signal)
			.then((result) => {
				setData(result);
				setLoading(false);
				setEmpty(result.length === 0);
				abortController.current = undefined;
			})
			.catch(() => {});
	};

	const options = (data || []).map((item: any) => (
		<Combobox.Option
			value={item}
			key={item}
		>
			{item}
		</Combobox.Option>
	));

	return (
		<>
			<Combobox
				onOptionSubmit={(optionValue) => {
					setValue(optionValue);
					combobox.closeDropdown();
				}}
				withinPortal={false}
				store={combobox}
			>
				<Combobox.Target>
					<TextInput
						radius="xl"
						size="lg"
						placeholder="Apple, Tesla, Lockheed Martin"
						rightSectionWidth={42}
						leftSection={
							<IconSearch
								style={{
									width: rem(
										18
									),
									height: rem(
										18
									),
								}}
								stroke={1.5}
							/>
						}
						rightSection={
							<ActionIcon
								size={32}
								disabled={
									loading
								}
								radius="xl"
								variant="gradient"
								gradient={{
									from: "red",
									to: "blue",
								}}
							>
								{loading ? (
									<Loader
										color="white"
										size={
											18
										}
									/>
								) : (
									<IconArrowRight
										style={{
											width: rem(
												18
											),
											height: rem(
												18
											),
										}}
										stroke={
											1.5
										}
									/>
								)}
							</ActionIcon>
						}
						value={value}
						onChange={(event) => {
							setValue(
								event
									.currentTarget
									.value
							);
							fetchOptions(
								event
									.currentTarget
									.value
							);
							combobox.resetSelectedOption();
							combobox.openDropdown();
						}}
						onClick={() =>
							combobox.openDropdown()
						}
						onFocus={() => {
							combobox.openDropdown();
							if (data === null) {
								fetchOptions(
									value
								);
							}
						}}
						onBlur={() =>
							combobox.closeDropdown()
						}
					/>
				</Combobox.Target>

				<Combobox.Dropdown hidden={data === null}>
					<Combobox.Options>
						{options}
						{empty && (
							<Combobox.Empty>
								No results found
							</Combobox.Empty>
						)}
					</Combobox.Options>
				</Combobox.Dropdown>
			</Combobox>
		</>
	);
}

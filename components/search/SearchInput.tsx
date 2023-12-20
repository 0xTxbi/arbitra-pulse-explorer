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
	return (
		<TextInput
			radius="xl"
			size="lg"
			placeholder="Apple, Tesla, Lockheed Martin"
			rightSectionWidth={42}
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
					size={32}
					radius="xl"
					variant="gradient"
					gradient={{
						from: "red",
						to: "blue",
					}}
				>
					<IconArrowRight
						style={{
							width: rem(18),
							height: rem(18),
						}}
						stroke={1.5}
					/>
				</ActionIcon>
			}
			{...props}
		/>
	);
}

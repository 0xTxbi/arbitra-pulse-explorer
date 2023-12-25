"use client";

import {
	Box,
	Progress,
	PasswordInput,
	Group,
	Text,
	Center,
	Paper,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";
import { CustomContainer } from "../ui/CustomContainer";
import { UseFormReturnType } from "@mantine/form";
import { RegisterFormValues } from "@/utils/AuthFormValues";

export function SecondStep({
	form,
}: {
	form: UseFormReturnType<RegisterFormValues>;
}) {
	return (
		<CustomContainer>
			<Paper
				p={30}
				mt={30}
				radius="md"
			>
				<div>
					<PasswordInput
						placeholder="Your password"
						label="Password"
						required
					/>

					{/* confirm password */}
					<PasswordInput
						{...form.getInputProps(
							"password"
						)}
						placeholder="Your password"
						mt="md"
						label="Password"
						required
					/>
				</div>
			</Paper>
		</CustomContainer>
	);
}

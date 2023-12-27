"use client";
import { PasswordInput, Paper } from "@mantine/core";
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
						{...form.getInputProps(
							"hashedPassword"
						)}
						placeholder="Your password"
						mt="md"
						label="Your Password"
						description="Password must be at least 8 characters long."
						required
						autoComplete="new-password"
					/>
				</div>
			</Paper>
		</CustomContainer>
	);
}

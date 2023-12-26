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
						placeholder="Your password"
						label="Your Password"
						required
						autoComplete="new-password"
					/>

					{/* confirm password */}
					<PasswordInput
						{...form.getInputProps(
							"password"
						)}
						placeholder="Your password"
						mt="md"
						label="Confirm Password"
						required
						autoComplete="new-password"
					/>
				</div>
			</Paper>
		</CustomContainer>
	);
}

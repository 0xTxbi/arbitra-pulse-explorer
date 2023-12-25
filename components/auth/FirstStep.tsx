import { TextInput, Paper } from "@mantine/core";
import { CustomContainer } from "../ui/CustomContainer";
import { IconAt } from "@tabler/icons-react";
import { UseFormReturnType } from "@mantine/form";
import { RegisterFormValues } from "@/utils/AuthFormValues";

export function FirstStep({
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
				<TextInput
					label="Username"
					leftSection={<IconAt size={12} />}
					placeholder="txbi"
					{...form.getInputProps("username")}
					required
				/>
				<TextInput
					label="Your Email Address"
					placeholder="txbi@arbitra.pulse"
					{...form.getInputProps("email")}
					required
					mt="md"
				/>
			</Paper>
		</CustomContainer>
	);
}

import React, { ReactNode } from "react";
import { Container } from "@mantine/core";

interface CustomContainerProps {
	children: ReactNode;
	height?: number;
}

export function CustomContainer({
	children,
	height = 50,
}: CustomContainerProps) {
	return (
		<Container
			maw={500}
			style={{
				height: `${height}vh`,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "stretch",
			}}
		>
			{children}
		</Container>
	);
}

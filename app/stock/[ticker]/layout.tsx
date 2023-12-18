import { DashboardNav } from "@/components/navigation/DashboardNav";
import { Footer } from "@/components/navigation/Footer";
import { Container } from "@mantine/core";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { ticker: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const ticker = params.ticker.toUpperCase();

	return {
		title: `${ticker} Stats | Arbitra Pulse Explorer`,
		description: `real-time stock data and insights for ${ticker}.`,
	};
}

export default function DashboardLayout({
	params,
	children,
}: {
	children: React.ReactNode;
	params: { ticker: string };
}) {
	return (
		<>
			{/* nav */}
			<DashboardNav />

			{/* content */}
			<Container
				size="xl"
				mt={10}
			>
				{children}
			</Container>

			{/* footer */}
			<Footer />
		</>
	);
}

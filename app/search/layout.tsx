import { SearchFooter } from "@/components/navigation/SearchFooter";
import { SearchNav } from "@/components/navigation/SearchNav";

export const metadata = {
	title: "Search | Arbitra Pulse Explorer",
	description: "Search and access detailed data on stocks and companies.",
};

export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			{/* nav */}
			<SearchNav />

			{/* content */}
			<div
				style={{
					flex: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{children}
			</div>

			{/* footer */}
			<div style={{ marginTop: "auto" }}>
				<SearchFooter />
			</div>
		</div>
	);
}

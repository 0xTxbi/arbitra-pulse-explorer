import { DashboardNav } from "@/components/navigation/DashboardNav";
import { Footer } from "@/components/navigation/Footer";

export const metadata = {
	title: "Watchlist | Arbitra Pulse Explorer",
	description: "Track your stocks effortlessly with real-time updates.",
};

export default function WatchlistLayout({
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
			<DashboardNav />

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
				<Footer />
			</div>
		</div>
	);
}

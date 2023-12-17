import { DashboardNav } from "@/components/navigation/DashboardNav";

export const metadata = {
	title: "Dashboard | Arbitra Pulse Explorer",
	description:
		"a seamless and intuitive interface for exploring real-time stock sentiments and related information via the Arbitra Pulse API.",
};

export default function RootLayout({ children }: { children: any }) {
	return (
		<>
			{/* nav */}
			<DashboardNav />
			{/* content */}
			<h1>dashboard layout</h1>
		</>
	);
}

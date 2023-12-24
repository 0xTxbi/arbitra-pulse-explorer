import { DashboardNav } from "@/components/navigation/DashboardNav";
import { Footer } from "@/components/navigation/Footer";

export const metadata = {
	title: "Account Settings | Arbitra Pulse Explorer",
	description:
		"update profile details, enhance security, and personalize preferences with ease.",
};

export default function SettingsLayout({
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
			<div>{children}</div>

			{/* footer */}
			<div style={{ marginTop: "auto" }}>
				<Footer />
			</div>
		</div>
	);
}

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
		<>
			{/* nav */}
			<DashboardNav />
			{/* content */}
			{children}
			{/* footer */}
			<Footer />
		</>
	);
}

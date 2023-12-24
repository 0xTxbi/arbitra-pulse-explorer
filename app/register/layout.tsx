import { Footer } from "@/components/navigation/Footer";
import { UnauthNav } from "@/components/navigation/UnauthNav";

export const metadata = {
	title: "Create an Account | Arbitra Pulse Explorer",
	description: "create an account and explore the Arbitra Pulse API.",
};

export default function RegisterLayout({
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
			<UnauthNav />
			{/* content */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					flexGrow: 2,
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

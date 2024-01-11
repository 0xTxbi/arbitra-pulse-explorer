import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
	reactStrictMode: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
			{
				protocol: "https",
				hostname: "api.polygon.io",
			},
			{
				protocol: "https",
				hostname: "encrypted-tbn2.gstatic.com",
			},
			{
				protocol: "https",
				hostname: "wallpapercave.com",
			},
		],
	},
	experimental: {
		optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
	},
	typescript: {
		// temporary
		ignoreBuildErrors: true,
	},
});

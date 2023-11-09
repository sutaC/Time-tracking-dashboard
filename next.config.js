/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: "/github-pages",
};

module.exports = nextConfig;

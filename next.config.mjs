/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["jfzdccdmeckqgyqwctcv.supabase.co"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "http://localhost:3000/",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
};
// module.exports = nextConfig;
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './supabase-image-loader.js',
    },
};

export default nextConfig;

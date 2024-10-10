/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@pages'] = path.join(process.cwd(), 'src', 'pages');
    return config;
  },
};

export default nextConfig;

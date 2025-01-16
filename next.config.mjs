import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'contrareloj.com.do',               
            },
            {
                protocol: 'https',
                hostname: 'uploads-ssl.webflow.com',
            },
            {
                protocol: 'https',
                hostname: 'concepto.de',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com'
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            },
            {
                protocol: 'https',
                hostname: 'blogger.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'fotografias.larazon.es'
            }
        ]
    }
};

export default withNextIntl(nextConfig);
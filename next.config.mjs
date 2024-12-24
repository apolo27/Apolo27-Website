/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    env: {
        REACT_APP_API_KEY: 'AIzaSyCzfVpVDOvqLXVKLMDPczp5BUcs2jzU7Dg',
        REACT_APP_CALENDAR_ID: 'apolo27rd@gmail.com',
        GEMINI_API_KEY: "AIzaSyAHtzOwh7VL80Kzp95zdyekrCTF4ypnv2U"
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
            }
        ]
    }
};

export default nextConfig;

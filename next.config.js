/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bafybeib53kxzjxjcjhvtgl66mjamt33tksw4opbvft4exkj5h2puox4pi4.ipfs.w3s.link',
                port: '',
                pathname: '',
            },
        ],
    },

}

module.exports = nextConfig

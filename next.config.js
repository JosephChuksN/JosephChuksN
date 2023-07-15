/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
      images: {
        
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/portfolio-website-63b00.appspot.com/o/**',
          },
        ],
      },
  
  }
   
  module.exports = nextConfig
/** @type {import('next').NextConfig} */
import NextCors from 'next-cors';
const nextConfig = {
  middleware: [
    NextCors()
  ]
}

module.exports = nextConfig

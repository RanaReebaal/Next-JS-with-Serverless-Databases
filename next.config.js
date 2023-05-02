/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // env: {
  //   PGHOST: 'ep-holy-frost-193311.us-east-2.aws.neon.tech',
  //   PGDATABASE: 'neondb',
  //   PGUSER: 'rebaalhussain',
  //   PGPASSWORD: '7qA4SjGihIxD',
  // },
  env: {
    NEON_DATABASE_URL: 'postgres://rebaalhussain:7qA4SjGihIxD@ep-holy-frost-193311.us-east-2.aws.neon.tech/neondb',
  },
}

module.exports = nextConfig

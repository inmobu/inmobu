/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  concurrentFeatures: true,
  // i18n: {
  //   locales: ['es-419','es-CO','es-MX','es-AR','es-ES','en-US'],
  //   defaultLocale: 'en-US',
  // },
  images: {
    loader: 'cloudinary',
    path: 'https://example.com/myaccount/',
    domains: ['appvizer.es']
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/lisintg': { page: 'listing'}
      // '/details' :  { page : '/details'}
    }
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

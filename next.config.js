module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/resume': { page: '/resume' },
            '/contact': { page: '/contact' }
        }
    },
    trailingSlash: true
}
module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/index' },
            '/resume': { page: '/resume' },
            '/contact': { page: '/contact' }
        }
    },
}
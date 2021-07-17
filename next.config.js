module.exports = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'Permissions-Policy',
                        value: 'interest-cohort=()'
                    }
                ],
            },
        ]
    },
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/resume/': { page: '/resume' },
            '/contact/': { page: '/contact' },
            '/books/': { page: '/books' }
        }
    },
    trailingSlash: true
}

module.exports = {
    reactStrictMode: true,
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },
}



const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: './dist',
        port: 3000,
        index: 'index.html',
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin(
            [ { from: './public/index.html', to: './index.html', force:true } ],
            { copyUnmodified: true }
        ),
        new CopyWebpackPlugin(
            [ { from: './public/android-chrome-192x192.png', to: 'android-chrome-192x192.png', force:true } ],
            { copyUnmodified: true }
        ),
        new CopyWebpackPlugin(
            [ { from: './public/android-chrome-256x256.png', to: 'android-chrome-256x256.png', force:true } ],
            { copyUnmodified: true }
        ),        
        new CopyWebpackPlugin(
            [ { from: './public/apple-touch-icon.png', to: 'apple-touch-icon.png', force:true } ],
            { copyUnmodified: true }
        ),
        new CopyWebpackPlugin(
            [ { from: './public/favicon-16x16.png', to: 'favicon-16x16.png', force:true } ],
            { copyUnmodified: true }
        ),
        new CopyWebpackPlugin(
            [ { from: './public/favicon-32x32.png', to: 'favicon-32x32.png', force:true } ],
            { copyUnmodified: true }
        ),
        new CopyWebpackPlugin(
            [ { from: './public/favicon.ico', to: 'favicon.ico', force:true } ],
            { copyUnmodified: true }
        ),        
        new CopyWebpackPlugin(
            [ { from: './public/mstile-150x150.png', to: 'mstile-150x150.png', force:true } ],
            { copyUnmodified: true }
        ),
        new CopyWebpackPlugin(
            [ { from: './public/safari-pinned-tab.svg', to: 'safari-pinned-tab.svg', force:true } ],
            { copyUnmodified: true }
        ),        
        new CopyWebpackPlugin(
            [ { from: './src/server.js', to: 'server.js', force:true } ],
            { copyUnmodified: true }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader",
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    }
};
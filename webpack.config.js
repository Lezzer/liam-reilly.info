const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: './dist',
        port: 3001,
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
        )
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
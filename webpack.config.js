const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production'

    return {
        entry: './src/app.js', //Tells webpack where it should start
        stats: {warnings:false},
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        devtool: isProd ? 'source-map' : 'inline-cheap-module-source-map',
        devServer: {
            static: [{
                directory: path.join(__dirname, 'public'),
                watch: true,
                serveIndex: true
            }],
            historyApiFallback: true
        }
    }
}

//loader

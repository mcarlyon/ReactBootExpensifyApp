const path = require("path");

module.exports = {
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
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
     },
     devtool: 'eval',
     devServer: {
         static: [{
             directory: path.join(__dirname, 'public'),
             watch: true,
             serveIndex: true
         }],
         historyApiFallback: true
     }
};

//loader

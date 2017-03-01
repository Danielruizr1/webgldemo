var path = require('path');
module.exports = {
  entry: './app/scripts/main.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'app/scripts'),
    filename: 'bundle.js',
    publicPath: "/scripts",
    sourceMapFilename: '[name].map'
    
  },
  devServer: {
	  contentBase: path.resolve(__dirname, 'app'),
    publicPath: "/scripts",
	  port: 9000
	},
  module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};
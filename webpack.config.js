var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: path.resolve(__dirname,"src/app.js"),
	output:{
		filename:'[name].[hash].bundle.js',
		path: path.resolve(__dirname,"build"),
		chunkFilename: '[name].[hash].chunk.js',
	},
	devtool:'source-map',
	module:{
		loaders:[
			{
				test: /\.js$/,
			    loader: 'babel-loader?presets[]=es2015&presets[]=react',
			    exclude: /node_modules/
			},
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,"index.html"),
			inject: 'body',
		}),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname,"index.html"),
		}
		]),
	],
	devServer: {
	  contentBase: path.resolve(__dirname, "build"),
	  compress: true,
	}
}
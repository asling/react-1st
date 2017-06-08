var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
module.exports = {
	entry: {
		main:path.resolve(__dirname,"src/app.js"),
		vendor:['react'],
	},
	output:{
		filename:'[name].[chunkhash].js',
		path: path.resolve(__dirname,"build"),
		chunkFilename: "[name].[chunkhash].js"
	},
	devtool:'source-map',
	module:{
		loaders:[
			{
				test: /\.js$/,
			    loader: 'babel-loader?presets[]=es2015&presets[]=react',
			    exclude: /node_modules/,
			    query: {
					cacheDirectory: true,
					plugins: [
						["import", { libraryName: "antd", style: "css" }],
						["transform-runtime", {
					      "helpers": false,
					      "polyfill": false,
					      "regenerator": true,
					      "moduleName": "babel-runtime"
					    }]
					]
				}
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract(['css-loader'])
			}

		]
	},
	plugins:[
		new webpack.HashedModuleIdsPlugin(),
	    new WebpackChunkHash(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname,"index.html"),
		}
		]),
		new ExtractTextPlugin("css/[name].[hash].css"),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor','manifest'],
			minChunks:Infinity,
		}),
		new ChunkManifestPlugin({
	      filename: "chunk-manifest.json",
	      manifestVariable: "webpackManifest",
	      inlineManifest: true
	    }),
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,"index.html"),
			inject: 'body',
		}),
	]
}
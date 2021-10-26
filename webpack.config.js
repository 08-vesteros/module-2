const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';
console.log(prod);

module.exports = {
	entry: {
		main: './src/index.tsx',
	},
	devServer: {
		historyApiFallback: true,
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].bundle.js',
	},
	performance: {
		hints: false,
	},
	optimization: {
		splitChunks: {
			minSize: 10000,
			maxSize: 250000,
		},
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new WorkboxWebpackPlugin.InjectManifest({
			swSrc: './src/src-sw.js',
			swDest: 'sw.js',
			mode: 'production',
			maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
		}),
		new CopyPlugin({
			patterns: [{ from: './src/manifest.json', to: '' }],
		}),
	],
};

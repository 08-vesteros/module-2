const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = [
	{
		entry: {
			main: './src/index.tsx',
		},
		devServer: {
			historyApiFallback: true,
		},
		output: {
			path: path.join(__dirname, '/dist'),
			filename: 'main.js',
		},
		performance: {
			hints: false,
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
		watchOptions: {
			aggregateTimeout: 500,
			poll: 1000,
			ignored: /node_modules/,
		},
	},
	{
		target: 'node',
		entry: {
			main: './src/server/index.ts',
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					loader: 'null-loader',
					test: /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/,
				},
			],
		},
		output: {
			path: path.join(__dirname, '/dist'),
			filename: 'server.js',
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		performance: {
			hints: false,
		},
		optimization: { nodeEnv: false },
		externals: [nodeExternals()],
		plugins: [
			new webpack.ProvidePlugin({
				window: 'global/window',
				localStorage: path.resolve(path.join(__dirname, '/mock/localStorage.mock')),
				document: 'global/document',
				navigator: path.resolve(path.join(__dirname, '/mock/navigator.mock')),
			}),
		],
	},
];

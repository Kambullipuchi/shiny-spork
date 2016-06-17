function WebpackDevConfiguration (webpack, HtmlWebpackPlugin, ExtractTextPlugin) {
	var config = {
		entry: {
			app: ['angular', './source/index.ts']
		},
		output: {
			pathinfo: true,
			filename: '[name]-[chunkhash].js',
			path: require('path').resolve('./.tmp')
		},
		devtool: 'source-map',
		devServer: {
			port: 9000
		},
		resolve: {
			extensions: ['', '.ts', '.js']
		},
		module: {
			preLoaders: [
				{ test: /\.ts$/, loaders: ['tslint'] }
			],
			loaders: [
				{ test: /\,ts$/, loaders: ['ng-annotate-loader', 'ts-loader'] },
				{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap') },
				{ test: /\.html$/, loaders: ['html-loader'] },
				{ test: /\.(jpg|png|woff|woff2|eot|svg|ico)$/, loader: 'file-loader?name=[path][name].[ext]' },
				{ test: /\.json$/, loader: 'json-loader' }
			],
			noParse: /ol\.js/
		},
		tslint: {
			configuration: require('./default-tslint.js')
		},
		plugins: [
			new ExtractTextPlugin('[name]-[chunkhash].css'),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'head'
			}),
			new HtmlWebpackPlugin({
				template: 'index.html',
				inject: false
			})
		]
	};

	return config;
}

module.exports = WebpackDevConfiguration;
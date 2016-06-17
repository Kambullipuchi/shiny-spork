function KarmaConfiguration (config, webpack) {

	"use strict";

	config.set({
		frameworks: ["jasmine"],
		files: [
			"node_modules/angular/angular.js",
			"node_modules/angular-mocks/angular-mocks.js",
			"source/**/*.spec.ts"
		],
		preprocessors: {
			"**/*.spec.ts": ["webpack", "sourcemap"]
		},
		webpack: {
			devtool: "inline-source-map",
			resolve: {
				extensions: ["", ".ts", ".js"]
			},
			module: {
				preLoaders: [{
					test: /\.ts$/,
					loaders: ["tslint-loader"]
				}],
				loaders: [{
					test: /\.ts$/,
					loader: "ts-loader"
				}, {
					test: /\.html$/,
					loader: "raw-loader"
				}, {
					test: /\.(jpg|png|woff|woff2|eot|ttf|svg|scss)$/,
					loader: "null-loader"
				}, {
					test: /\.json$/,
					loader: "json-loader"
				}],
				postLoaders: [
					// instrument only testing sources with Istanbul
					{
						test: /\.ts$/,
						loader: 'istanbul-instrumenter-loader',
						exclude: [
							/\.spec\.ts$/,
							/node_modules/
						]
					}
				],
				noParse: /ol\.js/
			},
			externals: {
				// angular is included specifically in the "files" setting
				// prevent webpack from requiring it multiple time from each spec
				"angular": "angular"
			},
			plugins: [
				new webpack.ProvidePlugin({
					$: "jquery",
					jQuery: "jquery"
				})
			],
			tslint: {
				configuration: require("./default-tslint.js")
			}
		},
		webpackMiddleware: {
			noInfo: true,
			stats: {
				colors: true
			}
		},
		singleRun: false,
		autoWatch: true,
		reporters: ["mocha", "junit", "coverage"],
		browsers: ["PhantomJS"],
		junitReporter: {
			outputDir: ".tmp/unit-tests/"
		},
		mochaReporter: {
			output: "autowatch"
		},
		coverageReporter: {
			dir: ".tmp/coverage/",
			subdir: function(browser) {
				// normalization process to eliminate version and capitalization differences
				return browser.toLowerCase().split(/[ /-]/)[0];
			},
			reporters: [{
				type: "html"
			}, {
				type: "text-summary"
			}, {
				type: "cobertura",
				file: "cobertura-coverage.xml"
			}]
		}
	});
}

module.exports = KarmaConfiguration;
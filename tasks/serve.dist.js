var gulp = require('gulp');
var http = require('http');
var path = require('path');
var gutil = require('gulp-util');
var package = require('./package');
var nodeStatic = require('node-static');
var setup = require(path.resolve('setup.json'));
var config = require(path.resolve('webpack.dev.config.js'));

function ServeDist () {
	var port = (config && config.devServer && config.devServer.port) ? config.devServer.port : 9000; 
	var file = new nodeStatic.Server(setup.root.dist);
	http.createServer(function (request, response) {
		request.addListener('end', function () {
			file.serve(request, response);
		}).resume();
	}).listen(port);
}

gulp.task('serve:dist', ServeDist);
module.exports = ServeDist;
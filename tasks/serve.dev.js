var gulp = require('gulp');
var http = require('http');
var path = require('path');
var gutil = require('gulp-util');
var spawn = require('cross-spawn-async');

function ServeDev (done) {
	var command = ['node_modules/webpack-dev-server/bin/webpack-dev-server.js', '--config', './webpack.dev.config.js', '--inline', '--content-base', 'nowhere', '--history-api-fallback'];
	var webpackDevServer = spawn('node', command, { stdio: 'inherit' });
	webpackDevServer.on('close', done);
}

gulp.task('serve:dev', ServeDev);
module.exports = ServeDev;
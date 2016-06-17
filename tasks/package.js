var gulp = require('gulp');
var clean = require('./clean');
var gutil = require('gulp-util');
var spawn = require('cross-spawn-async');

function Package (done) {
	var command = ['node_modules/webpack/bin/webpack.js', '--config', './webpack.prod.config.js'];
	var webpackCompiler = spawn('node', command, { stdio: 'inherit' });
	webpackCompiler.on('close', done);
}

gulp.task('package', ['clean'], Package);
module.exports = Package;
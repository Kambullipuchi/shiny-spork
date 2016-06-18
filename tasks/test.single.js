var gulp = require('gulp');
var clean = require('./clean');
var spawn = require('cross-spawn-async');

var TestSingle (done) {
	var command = ['node_modules/karma/bin/karma', 'start', '--single-run'];
	var karmaServer = spawn('node', command, { stdio: 'inherit' });
	karmaServer.on('close', done);
}

gulp.task('test:single', ['clean'], TestSingle);
module.exports = TestSingle;
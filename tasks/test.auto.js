var gulp = require('gulp');
var clean = require('./clean');
var spawn = require('cross-spawn-async');

function TestAuto (done) {
	var command = ['node_modules/karma/bin/karma', 'start', '--no-single-run'];
	var karmaServer = spawn('node', command, { stdio: 'inherit' });
	karmaServer.on('close', done);
}

gulp.task('test:auto', ['clean'], TestAuto);
module.exports = TestAuto;
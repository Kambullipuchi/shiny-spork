var del = require('del');
var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var config = require(path.resolve('config.json'));

function CleanBuildDirectory (done) {
	del([config.root.temp, config.root.dist]).then(function (paths) {
		console.log(paths);
		done();
	});
}

gulp.task('clean', CleanBuildDirectory);
module.exports = CleanBuildDirectory;
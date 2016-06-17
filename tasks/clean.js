var del = require('del');
var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var setup = require(path.resolve('setup.json'));

function CleanBuildDirectory (done) {
	del([setup.root.temp, setup.root.dist]).then(function (paths) {
		console.log(paths);
		done();
	});
}

gulp.task('clean', CleanBuildDirectory);
module.exports = CleanBuildDirectory;
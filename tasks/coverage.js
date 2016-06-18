var gulp = require('gulp');
var open = require('open');

function Coverage () {
	open('./.tmp/coverage/phantomjs/index.html');
}

gulp.task('coverage', Coverage);
module.exports = Coverage;
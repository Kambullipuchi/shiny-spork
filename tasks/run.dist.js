var gulp = require('gulp');
var open = require('./open.dist');
var serve = require('./serve.dist');
var package = require('./package');

gulp.task('run:dist', ['serve:dist', 'open:dist']);
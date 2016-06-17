var gulp = require('gulp');
var open = require('./open.dev');
var serve = require('./serve.dev');
var package = require('./package');

gulp.task('run', ['serve:dev', 'open:dev']);
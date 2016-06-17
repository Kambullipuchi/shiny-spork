var gulp = require('gulp');
var open = require('open');
var path = require('path');
var setup = require(path.resolve('setup.json'));
var config = require(path.resolve('webpack.dev.config.js'));


function OpenDev () {
	var port = (config && config.devServer && config.devServer.port) ? config.devServer.port : 9000; 
	open(setup.host.normal + ':' + port);
}

gulp.task('open:dev', OpenDev);
module.exports = OpenDev;
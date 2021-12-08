var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var lintspaces = require("gulp-lintspaces");

gulp.task('less', function () {
	gulp.src('./src/css/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('default', function () {
	gulp.watch('./src/css/**.less', ['less']);
});

gulp.task("lintspaces", function() {
	return gulp.src(['./src/**/*.html','./src/assets/**/*.js','./src/assets/**/*.css'])
	.pipe(lintspaces({
		indentation: 'tabs',
		newlineMaximum: 1,
		trailingspaces: true
	}))
	.pipe(lintspaces.reporter());
});

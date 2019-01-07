/**
 * Created by i327364 on 19/01/2017.
 */
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	concatCSS = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css');

var jsFiles = 'public/assets/js/*.js',
	jsDest = 'public/dist/scripts',
	cssFiles = 'public/assets/css/*.css',
	cssDest = 'public/dist/styles',
	jsAdminFiles = 'public/assets/js/admin/*.js';

gulp.task('default', ['scripts', 'admin-scripts', 'styles']);

gulp.task('scripts', function() {
	return gulp.src(jsFiles)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(jsDest))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});

gulp.task('admin-scripts', function() {
	return gulp.src(jsAdminFiles)
		.pipe(concat('admin-scripts.js'))
		.pipe(gulp.dest(jsDest))
		.pipe(rename('admin-scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});

gulp.task('styles', function() {
	return gulp.src(cssFiles)
		.pipe(concatCSS("bundle.css"))
		.pipe(gulp.dest(cssDest))
		.pipe(rename('bundle.min.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(cssDest));
});

// gulp.task('watch', function() {
// 	gulp.watch(jsFiles, ['scripts']);
// 	gulp.watch(jsAdminFiles, ['admin-scripts']);
// 	gulp.watch(cssFiles, ['styles']);
// });

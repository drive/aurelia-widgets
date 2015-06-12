var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var sass = require('gulp-ruby-sass');
var gulpFilter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var runSequence = require('run-sequence');


/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function () {

    var sassConfig = {
        noCache: true,
        compass: true,
        sourcemap: false,
        force: false
    };

    // Don’t write sourcemaps of sourcemaps
    var filter = gulpFilter(['*.css', '!*.map']);

     return sass(paths.sass, sassConfig)
     .pipe(plumber())
     .pipe(sourcemaps.init())
     .pipe(filter) // Don’t write sourcemaps of sourcemaps
     .pipe(sourcemaps.write())
     .pipe(filter.restore()) // Restore original files
     .pipe(gulp.dest(paths.styleFolder));
});

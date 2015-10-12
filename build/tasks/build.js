var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

var moduleTypes = ['common', 'amd', 'system'];
var buildTypes = ['build-es6'];

moduleTypes.forEach(function(mod) {
  gulp.task('build-styles-' + mod, function () {
    return gulp.src([paths.style, paths.publishedSass])
      .pipe(gulp.dest(paths.output + mod));
  });

  gulp.task('build-html-' + mod, function () {
    return gulp.src(paths.html)
      .pipe(gulp.dest(paths.output + mod));
  });

  gulp.task('build-' + mod, ['build-html-' + mod,'build-styles-' + mod], function () {
    return gulp.src(paths.source)
      .pipe(to5(assign({}, compilerOptions, {modules: mod})))
      .pipe(gulp.dest(paths.output + mod));
  });
  buildTypes.push('build-' + mod);
});

gulp.task('build-styles-es6', function () {
  return gulp.src(paths.style)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-html-es6', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-es6', ['build-html-es6','build-styles-es6'], function () {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.output + 'es6'));
});


gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    buildTypes,
    callback
  );
});

var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var through2 = require('through2');
var tools = require('aurelia-tools');
var concat = require('gulp-concat');
var insert = require('gulp-insert');

var jsName = paths.packageName + '.js';
var moduleTypes = ['commonjs', 'amd', 'system', 'es2015'];
var buildTypes = [];

gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output));
});


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
    .pipe(to5(assign({}, compilerOptions[mod]())))
    .pipe(gulp.dest(paths.output + mod));
  });
  buildTypes.push('build-' + mod);
});


gulp.task('build-index', function(){
  var importsToAdd = [];

  return gulp.src([
    paths.root + '*.js',
    paths.root + '**/*.js',
   '!' + paths.root + 'index.js'])
    .pipe(through2.obj(function(file, enc, callback) {
      file.contents = new Buffer(tools.extractImports(file.contents.toString("utf8"), importsToAdd));
      this.push(file);
      return callback();
    }))
    .pipe(concat(jsName))
    .pipe(insert.transform(function(contents) {
      return tools.createImportBlock(importsToAdd) + contents;
    }))
    .pipe(gulp.dest(paths.output));
});


gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'build-index',
    buildTypes,
    callback
  );
});



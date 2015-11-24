var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

var SRC_ARQUIVO = 'saiyajin.js';
var SRC_ARQUIVO_MIN = 'saiyajin.min.js';
var DIST_ARQUIVO = '.';

gulp.task('default', ['del'], function() {
  return gulp.src(SRC_ARQUIVO)
             .pipe(rename(SRC_ARQUIVO_MIN))
             .pipe(uglify())
             .pipe(gulp.dest(DIST_ARQUIVO));
});

gulp.task('del', function() {
  return del([SRC_ARQUIVO_MIN]);
});

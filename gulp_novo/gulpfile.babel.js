import gulp from 'gulp';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import del from 'del';

const SRC_ARQUIVO = 'saiyajin.js';
const SRC_ARQUIVO_MIN = 'saiyajin.min.js';
const DIST_ARQUIVO = '.';

gulp.task('default', ['del'], () => {
  return gulp.src(SRC_ARQUIVO)
             .pipe(rename(SRC_ARQUIVO_MIN))
             .pipe(uglify())
             .pipe(gulp.dest(DIST_ARQUIVO));
});

gulp.task('del', () => del([SRC_ARQUIVO_MIN]));

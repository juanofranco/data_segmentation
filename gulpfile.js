const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
//task
gulp.task('es6', ()=>
  gulp.src('./assets/js/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('./public/js/'))
);
gulp.task('sass', () =>
  gulp.src('./assets/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css/'))
);

gulp.task('default', () => {
 gulp.watch('./assets/js/*.js',['es6']);
 gulp.watch('./assets/scss/*.scss',['sass']);
});
var gulp = require('gulp');
var server = require('browser-sync').create();
var pump = require('pump');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('serve', function() {
  server.init({
    server: './',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('*.html').on('change', server.reload);
  gulp.watch('css/*.css').on('change', server.reload);
});


gulp.task('minjs', function () {
  pump([
    gulp.src('js/main.js'),
    uglify(),
    rename('main.min.js'),
    gulp.dest('auto')
  ]);
});

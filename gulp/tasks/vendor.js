import config      from '../config';
import changed     from 'gulp-changed';
import browserSync from 'browser-sync';
import gulp        from 'gulp';

gulp.task('vendor', function() {
  return gulp.src(config.vendor.src)
    .pipe(changed(config.vendor.dest))
    .pipe(gulp.dest(config.vendor.dest))
    .pipe(browserSync.stream());
});
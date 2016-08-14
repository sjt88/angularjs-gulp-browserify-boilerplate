import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  global.isProd = false;

  // runSequence(['build', 'watch', cb]);
  runSequence(
    ['vendor', 'styles', 'images', 'fonts', 'views'],
    'browserify',
    'watch',
    cb
  );
});

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], function(cb) {
  cb = cb || function() {};

  global.isProd = !global.e2e;

  runSequence(['vendor', 'styles', 'images', 'fonts', 'views'], 'browserify', 'gzip', cb);
});

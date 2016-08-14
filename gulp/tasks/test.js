import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('test', function() {

  return runSequence('unit', 'protractor', obj => {
  	console.log('runSequence callback');
  	console.log(obj);
  });

});

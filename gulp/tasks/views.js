import config        from '../config';
import gulp          from 'gulp';
import merge         from 'merge-stream';
import templateCache from 'gulp-angular-templatecache';
import strip         from 'gulp-strip-comments';
import gulpif        from 'gulp-if';
import insert        from 'gulp-insert';

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  const indexFile = gulp.src(config.views.index)
    .pipe(gulpif(global.isProd, strip()))
    .pipe(gulpif(global.isProd, insert.prepend('<!-- ' + config.projectName +  ' Version ' + global.version + ' -->\n')))
    .pipe(gulp.dest(config.buildDir));

  // Process any other view files from app/views
  const views = gulp.src(config.views.src)
    .pipe(gulpif(global.isProd, strip()))
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest));

  return merge(indexFile, views);

});

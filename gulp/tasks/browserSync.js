import config      from '../config';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import testServer from '../util/testServer';

gulp.task('browserSync', function() {
  // start test server, then start browser sync
  testServer({
    port: config.testPort,
    dir: config.buildDir
  }).then(() => {
    browserSync.init({
      proxy: 'localhost:3002',
    	port: config.browserPort,
    	ui: {
      	port: config.UIPort
      },
      ghostMode: {
        links: false,
        clicks: false,
        scroll: false
      }
    });
  });

});

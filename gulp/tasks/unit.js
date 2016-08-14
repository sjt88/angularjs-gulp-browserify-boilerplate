import config   from '../config';
import path     from 'path';
import gulp     from 'gulp';
import {Server} from 'karma';

import testServer from '../util/testServer';

gulp.task('unit', ['views'], function(cb) {

  console.log('Starting express server before running unit tests');
  testServer({
    port: config.testPort,
    dir: config.buildDir
  }).then(expressServer => {
    console.log('Express server started, running unit tests');
    let server = new Server({
      configFile: path.resolve(__dirname, '../..', config.test.karma),
      singleRun: true
    }, cb);

    server.on('run_complete', () => {
        console.log('Unit tests completed - closing express server');
        expressServer.close();
    });
    server.start();
  });
});

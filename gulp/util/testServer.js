import express from 'express';
import bodyParser from 'body-parser';

import mockRoutes from '../../fixtures/mock_api.js';

export default function testServer({port, dir}) {

  const app = express();

  app.use(express.static(dir));
  app.use(bodyParser.json());

  // apply middleware for each of our routes
  mockRoutes.forEach(route => {
  	if (!route.method) route.method = 'get';
    console.log(route);
  	app[route.method](route.route, route.handle);
  });

	// instantiate the server
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });
}

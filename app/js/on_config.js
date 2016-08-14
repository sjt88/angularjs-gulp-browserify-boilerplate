import routes from './routes';

function OnConfig(AppSettings, $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  // $locationProvider.html5Mode(true);

  for (var route in routes) {
    if (routes[route].url !== '/') {
      routes[route].url = routes[route].url;
    }
  	$stateProvider.state(routes[route].name, routes[route]);
  }

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;

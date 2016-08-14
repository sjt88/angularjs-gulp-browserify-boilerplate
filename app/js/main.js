import angular from 'angular';

import 'angular-ui-router';

import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

import appSettings  from './constants/AppSettings';
import onConfig     from './on_config';
import onRun        from './on_run';

// angular dependencies
const dependencies = [
  'ui.router',
];

const modules = dependencies.concat([
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
]);

angular.module('app', modules)
       .constant('AppSettings', appSettings)
       .config(onConfig)
       .run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});


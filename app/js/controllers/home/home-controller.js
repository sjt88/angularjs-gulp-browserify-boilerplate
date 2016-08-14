function HomeCtrl(HelloWorldService) {
  this.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  this.number = 1234;
  this.hello = HelloWorldService.test();
}

export default {
  name: 'HomeCtrl',
  fn: ['HelloWorldService', HomeCtrl]
};

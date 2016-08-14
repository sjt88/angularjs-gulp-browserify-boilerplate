function ExampleDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/common/example.html',
    scope: {
      title: '@',
      message: '@clickMessage'
    },
    link: (scope, element) => {
      element.on('click', () => {
        window.alert('Element clicked: ' + scope.message);
      });
    }
  };
}

export default {
  name: 'exampleDirective',
  fn: ExampleDirective
};

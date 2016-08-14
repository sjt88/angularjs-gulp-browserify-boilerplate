describe('Unit: HomeCtrl', function() {

  let HomeCtrl, $controller, $scope;

  beforeEach(function () {
    // mock necessary services
    angular.mock.module('app');

    angular.mock.inject(function(_$controller_, _$rootScope_) {
      
        // mock the getList method
        $controller = _$controller_;
        $scope      = _$rootScope_.$new();

        HomeCtrl = $controller('HomeCtrl', {
          $scope: $scope
        });
    });
  });

  it('should exist', function() {
    expect(HomeCtrl).toBeDefined();
  });

  it('should have a title property', function() {
    expect(HomeCtrl.title).toBeDefined();
  });

  it('should have a number property', function() {
    expect(HomeCtrl.number).toBeDefined();
  });
});

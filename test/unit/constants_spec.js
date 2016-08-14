describe('Unit: Constants', function() {

  let constants;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the directive
    angular.mock.inject((AppSettings) => {
      constants = AppSettings;
    });
  });

  it('should exist', function() {
    expect(constants).toBeDefined();
  });

  it('should set an APP_TITLE', function() {
    expect(constants.APP_TITLE).toBeDefined();
  });
});
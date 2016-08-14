describe('Unit: HelloWorld', function() {

  let HelloWorldService;

  beforeEach(function(done) {
    angular.mock.module('app');

    // mock the service
    angular.mock.inject((_HelloWorldService_) => {
      HelloWorldService = _HelloWorldService_;
      done();
    });
  });

  it('should exist', function() {
    expect(HelloWorldService).toBeDefined();
  });

  describe('test()', function () {
    it('should return hello world', function() {
      expect(HelloWorldService.test()).toEqual('Hello World');
    });
  })
});

function AboutService($q) {
  'ngInject';

  const service = {};

  service.get = function() {
    return $q(resolve => {
      resolve({
        info: 'this is some information returned by the AboutService'
      });
    })
  };

  return service;

}

export default {
  name: 'AboutService',
  fn: AboutService
};

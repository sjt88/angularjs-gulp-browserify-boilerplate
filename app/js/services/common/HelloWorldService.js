function HelloWorldService() {
  const service = {};

  service.test = () => {
    return 'Hello World'
  }

  return service;
}

export default {
  name: 'HelloWorldService',
  fn: [HelloWorldService]
};

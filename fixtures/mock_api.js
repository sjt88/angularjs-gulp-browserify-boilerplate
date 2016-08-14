// express middlewares for mock api
// (used for unit/protractor/dev tasks)

module.exports = [
  {
    method: 'get',
    route: '/test',
    handle: function (req, res, next) {
      res.end(JSON.stringify({test: true}));
      return next();
    }
  }
]

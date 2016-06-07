var authRoutes = require('./auth.routes');

module.exports = function(express) {
  var router = express.Router();
  authRoutes(router);

  return router;
};

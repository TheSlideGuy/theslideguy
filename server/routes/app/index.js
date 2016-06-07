module.exports = function(express) {
  var router = express.Router();

  // GET home page.
  router.get('/', function(req, res, next) {
    res.sendFile(process.env.NODE_PATH + '/public/index.html');
  });

  // Login page
  router.get('/login', function(req, res, next) {
    res.sendFile(process.env.NODE_PATH + '/public/login.html');
  });

  return router;
};

/**
 * The application starts here!
 *
 * @see README.md
 */

var express = require('express');
var config = require('./config');

if (config.env == 'dev') {
  var nomo = require('node-monkey');
}

var morgan = require('morgan');
var util = require('util');

var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'main',
  streams: [
    {
      level: 'info',
      stream: nomo.stream
    }
  ]
});

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// Connection settings
var host = process.env.IP || config.hostname || '127.0.0.1';
var port = process.env.PORT || config.port || 3000;

app.use(express.static(process.env.NODE_PATH + '/public'));

//view engine setup
app.set('views', process.env.NODE_PATH + '/server/views');
app.set('view engine', 'jade');

//log HTTP requests
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set up passport and OAuth 2 strategy for planning center integration
var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2');
passport.use('pco', new OAuth2Strategy({
  authorizationURL: 'https://api.planningcenteronline.com/oauth2/authorize',
  tokenURL: 'https://api.planningcenteronline.com/oauth2',
  clientID: config.pco.clientID,
  clientSecret: config.pco.clientSecret,
  callbackURL: 'http://' + host + ':' + port + '/pco-auth/callback'
}, function(accessToken, refreshToken, profile, done) {
  // Not storing user for now
  return done(null, {});
}));

// Import routes
var appRoutes = require('./routes/app')(express);
var apiRoutes = require('./routes/api')(express);
app.use('/', appRoutes);
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = Error('Not Found');
  err.status = 404;
  log.info(util.inspect({message: err.message, error: err, file: req.originalUrl}));
  //next(err);
  res.status(404).render('error.jade', {
    message: err.message,
    error: err
  });

  //res.send('404 Not Found Error');
});

//error handler
var error = require('./lib/error');
if (app.get('env') === 'development') {
  nomo.start({
    host: '127.0.0.1',
    port: '50500',
    suppressOutput: false
  });

  app.use(error.showError);
}

app.use(error.logErrors);

// Start listening for HTTP requests!
var server = app.listen(port, function() {
  log.info('The Slide Guy app listening at http://%s:%s', host, port);
});

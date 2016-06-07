var passport = require('passport');

module.exports = function(router) {

  // Setup PCO OAuth 2.0
  router.get('/pco-auth', passport.authenticate('pco'));
  router.get('/pco-auth/callback', passport.authenticate('pco', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));
};

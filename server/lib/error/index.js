require('./errors');

// ====== error handler middleware
exports.showError = function(err, req, res, next) {

  res.status(err.status || 500);

  res.render('error', {
    message: err.message,
    error: err
  });
  next(err);
};

exports.logErrors = function(err, req, res, next) {
  res.status(err.status || 500);

  res.render('error', {
    message: err.message,
    error: {}
  });

  console.log(util.inspect({message: err.message, error: err, stack: err.stack}));

  next(err);
};
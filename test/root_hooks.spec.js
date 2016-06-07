var mongoose = require('mongoose');
var config = require('../app/config');

before(function rootBeforeHook(done) {
  mongoose.connect('mongodb://' + config.mongo.url + '/' + config.mongo.db);
  done();
});

after(function rootAfterHook(done) {
  mongoose.connection.close();
  done();
});
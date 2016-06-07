var config = {
  env: 'dev',
  hostname: 'localhost',
  port: '3000',
  mongo: {
    url: process.env.MONGO_URI || 'localhost:27017',
    db: 'slide_guy'
  },
  pco: {
    clientID: '',
    clientSecret: '',
    callbackURL: ''
  }
};

module.exports = config;

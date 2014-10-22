var when = require('when');

var dbs = exports.dbs = {
  redis: null,
  mongo: null
};

exports.init = function() {
  var redis = require('redis');
  var client = redis.createClient();
  var RedisDb = require('backbone-db-redis');
  var redisStore = new RedisDb('serverbone-example', redis.createClient());
  dbs.redis = redisStore;
  return when.resolve();
};
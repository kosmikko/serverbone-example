var when = require('when');

var dbs = exports.dbs = {
  redis: null,
  mongo: null
};

exports.init = function() {
  var redis = require('redis');
  var RedisDb = require('backbone-db-redis');
  var redisStore = new RedisDb('serverbone-example', redis.createClient());
  dbs.redis = {
    db: redisStore,
    sync: redisStore.sync
  };
  return when.resolve();
};
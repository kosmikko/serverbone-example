var nodefn = require('when/node');

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

  var MongoDb = require('backbone-db-mongodb');
  var mongoClient =  require('mongodb').MongoClient;
  var mongoConnect = nodefn.lift(mongoClient.connect);
  return mongoConnect('mongodb://localhost:27017/serverbone-example').then(function(db) {
    var mongoStore = new MongoDb(db);
    dbs.mongo = {
      db: mongoStore,
      sync: mongoStore.sync
    };
  });
};

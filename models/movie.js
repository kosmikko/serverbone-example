var serverbone = require('serverbone');
var redis = require("redis");
var RedisDb = require('backbone-db-redis');
var store = new RedisDb('serverbone-example', redis.createClient());

/**
 * Movie is stored in Redis
 */
var Movie = serverbone.models.BaseModel.extend({
  db: store,
  sync: store.sync,
  type: 'movie',
  dbBaseKey: 'movies'
});

module.exports = Movie;
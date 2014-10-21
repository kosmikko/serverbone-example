var serverbone = require('serverbone');
var redis = require("redis");
var RedisDb = require('backbone-db-redis');
var store = new RedisDb('serverbone-example', redis.createClient());

/**
 * Movie is stored in Redis
 */

var schema = {
  id: 'schema/movie',
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    title: {
      type: 'string'
    },
    length: {
      type: 'integer'
    },
    genres: {
      type: 'array',
      default: []
    }
  },
  indexes: [{
    property: 'title'
  }]
};

var Movie = serverbone.models.BaseModel.extend({
  schema: schema,
  type: 'movie',
  db: store,
  sync: store.sync
});

module.exports = Movie;
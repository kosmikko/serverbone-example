var serverbone = require('serverbone');
var config = require('../config');

/**
 * Movie is stored in Redis
 */
var Movie = serverbone.models.BaseModel.extend({
  type: 'movie',
  dbBaseKey: 'movies',
  initialize: function () {
    if (!Movie.prototype.db) {
      Movie.prototype.db = config.dbs.redis;
      Movie.prototype.sync = config.dbs.redis.sync;
    }
    return Movie.__super__.initialize.apply(this, arguments);
  }
});

module.exports = Movie;
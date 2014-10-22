var BaseCollection = require('serverbone').collections.BaseCollection;
var Movie = require('../models').Movie;
var config = require('../config');

var Movies = module.exports = BaseCollection.extend({
  model: Movie,
  type: 'movies',
  initialize: function() {
    if (!Movies.prototype.db) {
      Movies.prototype.sync = config.dbs.redis.sync;
      Movies.prototype.db = config.dbs.redis;
    }
    return Movies.__super__.initialize.apply(this, arguments);
  }
});

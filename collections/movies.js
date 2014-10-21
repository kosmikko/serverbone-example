var BaseCollection = require('serverbone').collections.BaseCollection;
var Movie = require('../models/movie');

var Movies = module.exports = BaseCollection.extend({
  sync: Movie.prototype.sync,
  db: Movie.prototype.db,
  model: Movie,
  type: 'movies',
  dbBaseKey: 'movie',
  initialize: function(models, options) {
    Movies.__super__.initialize.apply(this, arguments);
  },
  url: function() {
    return this.dbBaseKey;
  }
});

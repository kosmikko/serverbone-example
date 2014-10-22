var BaseCollection = require('serverbone').collections.BaseCollection;
var Movie = require('../models').Movie;

var Movies = module.exports = BaseCollection.extend({
  sync: Movie.prototype.sync,
  db: Movie.prototype.db,
  model: Movie,
  type: 'movies'
});

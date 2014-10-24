var BaseCollection = require('serverbone').collections.BaseCollection;
var Movie = require('../models').Movie;
var config = require('../config');

var Movies = module.exports = BaseCollection.extend({
  model: Movie,
  type: 'movies',
});

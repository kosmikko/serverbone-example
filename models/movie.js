var serverbone = require('serverbone');
var config = require('../config');

/**
 * Movie is stored in Redis
 */
var Movie = serverbone.models.BaseModel.extend({
  type: 'movie',
  dbBaseKey: 'movies'
});

module.exports = Movie;
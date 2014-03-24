var models = require('../models');
var should = require('chai').should();

describe('Movie model tests', function() {
  it('should save a movie model', function() {
    var movie = new models.Movie({
      title: 'Foo movie',
      genres: ['action', 'comedy']
    });
    return movie.save();
  });
});
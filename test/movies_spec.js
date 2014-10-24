var config = require('../config');
var collections = require('../collections');
var models = require('../models');
var should = require('chai').should();

describe('Movie tests', function() {
  var movies;

  before(function() {
    return config.init().then(function() {
      models.Movie.setDbDriver(config.dbs.redis);
      collections.Movies.setDbDriver(config.dbs.redis);
      movies = new collections.Movies();
    });
  });

  after(function() {

  });

  it('should save a Movie model', function() {
    return movies.create({
      title: 'Foo movie',
      genres: ['action', 'comedy']
    }).then(function(movie) {
      should.exist(movie.id);
      console.log('movie:', movie.toJSON());
    });
  });

  it('should read movies', function() {
    return movies
      .fetch()
      .then(function() {
        console.log('movies', movies.length, movies.toJSON());
      });
  });

  it('should delete a movie', function() {
    return movies.at(0).destroy().then(function() {
      return movies.fetch().then(function() {
        console.log('x', movies.length);
      });
    });
  });
});
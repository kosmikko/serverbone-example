var config = require('../config');
var collections = require('../collections');
var models = require('../models');
var should = require('chai').should();

describe('Actor tests', function() {
  var actors;

  before(function () {
    return config.init().then(function () {
      collections.Actors.setDbDriver(config.dbs.mongo);
      models.Actor.setDbDriver(config.dbs.mongo);
      actors = new collections.Actors();
    });
  });

  after(function () {

  });

  it('should save an Actor model', function() {
    var name = 'Dick';
    return actors.create({
      first_name: name,
    }).then(function(actor) {
      should.exist(actor.id);
      actor.get('first_name').should.equal(name);
      console.log('actor:', actor.toJSON());
    });
  });

  it('should read actors', function() {
    return actors
        .fetch()
        .then(function() {
          actors.length.should.be.greaterThan(0);
          console.log('actors', actors.length, actors.toJSON());
        });
  });

  it('should delete an actor', function() {
    return actors.at(0).destroy()
        .then(function() {
          return actors.fetch();
        })
        .then(function() {
          console.log('x', actors.length);
        });
  });
});

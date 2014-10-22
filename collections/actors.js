var BaseCollection = require('serverbone').collections.BaseCollection;
var Actor = require('../models').Actor;

var Actors = module.exports = BaseCollection.extend({
  sync: Actor.prototype.sync,
  db: Actor.prototype.db,
  model: Actor,
  type: 'actors'
});

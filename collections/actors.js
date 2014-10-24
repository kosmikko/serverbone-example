var BaseCollection = require('serverbone').collections.BaseCollection;
var Actor = require('../models').Actor;
var config = require('../config');

var Actors = module.exports = BaseCollection.extend({
  model: Actor,
  type: 'actors',
  mongo_collection: Actor.prototype.mongo_collection,  // FIXME: the driver should derive this from the type
});

var serverbone = require('serverbone');
var config = require('../config');

/**
 * Actor is stored in MongoDB
 */
var Actor = serverbone.models.BaseModel.extend({
  type: 'actor',
  mongo_collection: 'actors'  // FIXME: the driver should derive this from the type
});

module.exports = Actor;
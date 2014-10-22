var serverbone = require('serverbone');

/**
 * Actor is stored in MongoDB
 */
var Actor = serverbone.models.BaseModel.extend({
  type: 'actor',
  dbBaseKey: 'actor'
});

module.exports = Actor;
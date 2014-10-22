var schemas = {};
schemas.Actor = require('./actor');
schemas.Movie = require('./movie');

var Factory = require('./factory');
schemas.factory = new Factory();

// map JSON schemas into Models
function init() {
  schemas.factory.register(schemas.Actor);
  schemas.factory.register(schemas.Movie);
}
init();

module.exports = schemas;
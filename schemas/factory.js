/**
 * Factory handles mapping schema IDs to Model & Collection classes
 */
var util = require('util');
var blueprint = require('backbone-blueprint');

// maps $refs into correct Collection class
var classMap = function(schemaId, options) {
  var collections = require('../collections');
  var rootSchemaId = options.rootSchema.id;
  var classMapMap = {
    'schema/movie': {
      actors: collections.Actors,
    }
  };
  if (options.propertyName && classMapMap.hasOwnProperty(rootSchemaId)) {
    return classMapMap[rootSchemaId][options.propertyName];
  }
};


var Factory = function EpSchemaFactory(options) {
  blueprint.SchemaFactory.call(this, options);
};
util.inherits(Factory, blueprint.SchemaFactory);

Factory.prototype._getBaseCollectionForSchemaId = function(schemaId, options) {
  options = options || {};
  var Class = classMap(schemaId, options);
  if (Class) {
    return Class;
  }
  return Factory.super_.prototype._getBaseCollectionForSchemaId.apply(this, arguments);
};

module.exports = Factory;
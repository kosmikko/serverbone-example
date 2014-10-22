var schemas = require('../schemas');

exports.Actor = schemas.factory.create(schemas.Actor, require('./actor'));
exports.Movie = schemas.factory.create(schemas.Movie, require('./movie'));
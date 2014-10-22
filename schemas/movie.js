module.exports = {
  id: 'schema/movie',
  type: 'object',
  properties: {
    id: {
      type: 'any'
    },
    title: {
      type: 'string'
    },
    length: {
      type: 'integer'
    },
    genres: {
      type: 'array',
      default: []
    },
    actors: {
      type: 'array',
      $ref: 'schema/actor',
      default: [],
      // Specifying references inits relation with params from this model
      references: {
        movie_id: 'id'
      },
      // Mount relation. By default its mounted into movies/:id/actors
      mount: true
    }
  }
};
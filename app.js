var express = require('express');
var serverbone = require('serverbone');
var bodyParser = require('body-parser');
var models = require('./models');
var collections = require('./collections');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var moviesResource = new serverbone.Resource('movies', {
  collection: collections.Movies
});
// mount Movies resource into /movies
app.use('/movies', moviesResource.app);

var port = 7777;
console.log('app listening in port %d', port);
app.listen(port);
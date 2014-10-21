serverbone-example
==================

Example application using serverbone

## Run server

    node app.js

#### Add a movie

	curl -X POST -H "Content-Type: application/json" "http://localhost:7777/movies" -d'
	{
    	"name": "Test horror movie",
    	"genres": ["horror"]
	}'

#### List movies

	curl -X GET "http://localhost:7777/movies"
	
#### Delete a movie
	
	curl -X DELETE "http://localhost:7777/movies/1"

## Run tests

    npm run test


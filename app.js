
var express = require('express');
var cors = require('cors');
var app = express();

//Loads rute files
const github_routes = require('./Routes/GitHub')
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//CORS

//Rutes

//ADD ROUTE ARRYS HERE
app.use('/api',[github_routes])

//Exports

module.exports = app;

//LIBS AND UTILITIES
const express = require('express')
const Router = express.Router();
const GitHubController = require('../Controllers/GitHubController'); 
//METHODS

//GET
Router.get('/info',GitHubController.getInfo);


//POST
//PATCH
//DELETE

module.exports=Router
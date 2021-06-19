//LIBS AND UTILITIES
const express = require('express');
const { RefreshInfo, GetProjects } = require('../Controllers/GitHubController')
const Router = express.Router();
//METHODS

//GET
Router.get('/refresh_info', RefreshInfo);
Router.get('/git/repos', GetProjects);


//POST
//PATCH
//DELETE

module.exports = Router;
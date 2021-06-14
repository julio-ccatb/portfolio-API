//LIBS AND UTILITIES
const express = require('express');
const { RefreshInfo } = require('../Controllers/GitHubController')
const Router = express.Router();
//METHODS

//GET
Router.get('/refresh_info', RefreshInfo);


//POST
//PATCH
//DELETE

module.exports = Router;
const { Router } = require("express");
const Info_Router = Router()
const { GetInfo, GetProjects } = require("../Controllers/InfoController");


//METHODS

//GET
Info_Router.get('/info', GetInfo);
Info_Router.get('/projects', GetProjects);


//POST
//PATCH
//DELETE

module.exports = Info_Router
const { Router } = require("express");
const Info_Router = Router()
const { GetInfo, GetProjects, GetCurriculum, test, GetProjectByID, PostProject, PostProjectIMG, GetProjectIMG } = require("../Controllers/InfoController");
const { upload } = require('../libs/multer_config');


//METHODS

//GET
Info_Router.get('/info', GetInfo);
Info_Router.get('/cvitae', GetCurriculum);
Info_Router.get('/projects', GetProjects);
Info_Router.get('/projects/:_id', GetProjectByID);
Info_Router.get('/projects/img/:img', GetProjectIMG);

//POST

Info_Router.post('/projects', PostProject);
Info_Router.post('/projects/img/:_id', upload.single('img'), PostProjectIMG);
//PATCH
//DELETE

module.exports = Info_Router
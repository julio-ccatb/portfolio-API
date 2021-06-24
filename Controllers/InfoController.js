const Code = require("../libs/responses");
const { Experience } = require("../models/experience");
const { Project } = require("../models/project");
const fs = require('fs');

var Controller = {

    GetInfo: (req, res) => {

        Experience.find({}, (err, experiences) => {

            if (err) return res.status(500).send({ message: Code._500 });
            if (!experiences) return res.status(404).send({ message: Code._404 });
            return res.status(200).send(experiences);

        })

    },

    GetProjects: async (req, res) => {

        try {

            let projects = await Project.find({});
            if (!projects) return res.status(404).send({ message: Code._404 });
            return res.status(200).send(projects);

        } catch (err) {

            console.log(err);
            res.status(500).send({ message: Code._500 });

        }
    },

    GetProjectByID: async (req, res) => {

        let { params } = req;
        let { _id } = params;

        if (!_id) return res.status(400).send({ message: Code._400 });

        try {

            projectFinded = await Project.findById(_id);
            if (!projectFinded) return res.status(204).send({ message: Code._204 });
            return res.status(200).send(projectFinded);

        } catch (err) {

            return res.status(500).send({ message: Code._500, err });

        }

    },


    PostProject: async (req, res) => {

        try {
            let { body } = req;
            let data = {
                _id,
                name,
                url,
                url_deploy,
                language,
                description,
                updated_at,
                img,
                show,

            } = body;

            let project = new Project(data);
            let exist = await Project.findById(_id)

            if (exist) {

                let projectUpdated = await Project.findOneAndUpdate({ _id }, project, {
                    new: true,
                    useFindAndModify: false
                });
                return res.status(200).send({ 'Finded': projectUpdated });
            }

            let projectSaved = await project.save();
            return res.status(200).send({ 'Not Found': projectSaved });

        } catch (err) {

            res.status(500).send({ message: Code._500, err });
            throw err;
        }


    },

    PostProjectIMG: async (req, res) => {

        try {
            let { params, file } = req;
            let { _id } = params
            let { filename, path } = file

            if (!_id) return res.status(400).send({ message: Code._400 });

            let projectUpdated = await Project.findOneAndUpdate({ _id }, { img: filename }, {
                new: true,
                useFindAndModify: false
            })

            if (!projectUpdated) {

                let absoliute_path = `${__dirname}/../${path}`;
                fs.access(absoliute_path, fs.constants.F_OK, err => {

                    if (err) throw err;
                    fs.unlinkSync(absoliute_path);

                });


                return res.status(400).send({ message: Code._400 });

            }
            return res.status(201).send({ projectUpdated, file });


        } catch (err) {


            return res.status(500).send({ message: Code._500, err })
        }
    },

    GetProjectIMG: async (req, res) => {

        try {

            const relative_path = `../resources/images/`;
            let { params } = req;
            let { img } = params

            if (!img) return res.status(400).send({ message: Code._400 });

            let ext = 'jpeg';
            let absoliute_path = `${__dirname}/${relative_path}${img}.${ext}`;
            fs.access(absoliute_path, fs.constants.F_OK, (err) => {
                if (err) return res.status(404).send({ message: Code._404 });
            });

            fs.readFile(absoliute_path, (err, file) => {

                if (err) return res.status(500).send({ message: Code._500, err });
                res.writeHead(200, { "Content-type": `image/${ext}` });
                return res.end(file)
            })

        } catch (err) {
            return res.status(500).send({ message: Code._500 });
        }
    },



    GetCurriculum: async (req, res) => {

        let curriculum = '../resources/docs/Curriculum_JCCA.pdf'
        let path = `${__dirname}/${curriculum}`

        fs.access(path, fs.constants.F_OK, err => {

            if (err) return res.status(404).send({ message: Code._404, err })
            console.log(`${path} ${err ? 'dont exist' : 'exist'}`);
        });

        fs.readFile(path, (err, file) => {

            if (err) return res.status(500).send({ message: Code._500, err });
            res.writeHead(200, { "Content-type": "application/pdf" })
            return res.end(file)
        });
    },
}

module.exports = Controller;
const Code = require("../libs/responses")
const { Experience } = require("../models/experience");
const { Project } = require("../models/project");
const fs = require('fs')

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
            let projects = await Project.find({})
            if (!projects) return res.status(404).send({ message: Code._404 });
            return res.status(200).send(projects);
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: Code._500 });
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
        })


    },

}

module.exports = Controller;
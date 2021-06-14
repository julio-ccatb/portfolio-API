const Code = require("../libs/responses")
const { Experience } = require("../models/experience");
const { Project } = require("../models/project");


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
    }

}

module.exports = Controller;
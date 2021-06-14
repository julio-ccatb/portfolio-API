const axios = require('axios');
const { Experience } = require('../models/experience');
const { Project } = require('../models/project');
const Code = require('../libs/responses');

var Controller = {

    RefreshInfo: async (req, res) => {

        let { data } = await axios.get('https://api.github.com/users/julio-ccatb/repos');

        let Projects = data.map((item) => {
            return new Project({
                _id: item.id,
                name: item.name,
                url: item.html_url,
                description: item.description,
                language: item.language,
                updated_at: item.updated_at
            })

        })

        Project.insertMany(Projects, { ordered: true }, (err, projectsSaved) => {

            if (err) return res.status(500).send({ message: Code._500, err });
            if (!projectsSaved) return res.status(409).send({ message: Code._409 });

            return res.status(201).send(projectsSaved)

        })
    },
}

module.exports = Controller;
const axios = require('axios');

var Controller = {

    test: async (req, res) => {

        let { data } = await axios.get('https://api.github.com/users/julio-ccatb/repos');
        let projects = data.map((project) => {
            return { name: project.name, url: project.html_url, description: project.description }
        })
        let profile = {
            url: data[0].owner.html_url,
            avatar: data[0].owner.avatar_url
        }


        if (data) return res.status(200).send([{profile, projects}]);

    }



}

module.exports = Controller;
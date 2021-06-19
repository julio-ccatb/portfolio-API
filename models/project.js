const mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    url: String,
    url_deploy: String,
    description: String,
    language: [String],
    updated_at: String,
    img: String,
    show: Boolean
})

var Project = mongoose.model('project', ProjectSchema);

module.exports.Project = Project;



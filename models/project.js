const mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    url: String,
    description: String,
    language: String,
    updated_at: String
})

var Project = mongoose.model('project', ProjectSchema);

module.exports.Project = Project;



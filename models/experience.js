const mongoose = require("mongoose");

var ExperienceSchema = new mongoose.Schema({
    date_range: String,
    city: String,
    place: String,
    work: String,
    description: String
});

var Experience = mongoose.model('experience', ExperienceSchema);

module.exports.Experience = Experience;
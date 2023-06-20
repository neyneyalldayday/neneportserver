const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  repositoryLink: {
    type: String,
    required: true
  },
  deployedLink: {
    type: String,
    required: true
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

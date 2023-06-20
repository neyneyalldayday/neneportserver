const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, repositoryLink, deployedLink } = req.body;
    const image = req.file.filename;

    const project = await Project.create({
      title,
      description,
      image,
      repositoryLink,
      deployedLink
    });

    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Error creating project' });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, repositoryLink, deployedLink } = req.body;
    const image = req.file ? req.file.filename : null;

    const project = await Project.findByIdAndUpdate(
      id,
      { title, description, image, repositoryLink, deployedLink },
      { new: true }
    );

    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Error updating project' });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndRemove(id);

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Error deleting project' });
  }
};

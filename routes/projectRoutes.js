const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const upload = require('../config/multer');

router.get('/', projectController.getProjects);
router.post('/', upload.single('image'), projectController.createProject);
router.put('/:id', upload.single('image'), projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;

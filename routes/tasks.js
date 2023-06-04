const express = require('express');
const router = express.Router();

// Import the task controller
const taskController = require('../controllers/taskController');

// Define routes
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;

const express = require('express');
const router = express.Router();

// Import the user controller
const userController = require('../controllers/userController');

// Define routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post("/signin", userController.signinUser);

module.exports = router;
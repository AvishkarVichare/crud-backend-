const express = require('express');
const { route } = require('../app');
const { getUsersController, createUserController, deleteUserController } = require('../controller/userController');
const router = express.Router();

router.post('/createuser', createUserController);
router.get('/getUser', getUsersController);
router.delete('/delete', deleteUserController);

module.exports = router;
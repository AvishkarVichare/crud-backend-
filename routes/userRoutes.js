const express = require('express');
const { route } = require('../app');
const { getUsersController, createUserController, deleteUserController, editUserController } = require('../controller/userController');
const router = express.Router();

router.post('/createuser', createUserController);
router.get('/getusers', getUsersController);
router.put('edituser/:id', editUserController);
router.delete('/delete/:id', deleteUserController);

module.exports = router;
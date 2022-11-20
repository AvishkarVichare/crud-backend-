const express = require('express');
const { getUsersController, createUserController, deleteUserController, editUserController } = require('../controller/userController');
const router = express.Router();

router.post('/createuser', createUserController);
router.get('/getusers', getUsersController);
router.put('/edituser/:id', editUserController);
router.delete('/delete/:id', deleteUserController);

module.exports = router;
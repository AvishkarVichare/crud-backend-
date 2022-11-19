const express = require('express');
const { route } = require('../app');
const { getUserController } = require('../controller/userController');
const router = express.Router();

router.get('/get',getUserController)

module.exports = router;
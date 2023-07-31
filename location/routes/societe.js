const express = require('express');
const router = express.Router();
const societeController = require('../controller/auth');

router.post('/', societeController.createCompany);
router.get('/login',societeController.login);

module.exports = router;

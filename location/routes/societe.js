const express = require('express');
const router = express.Router();
const societeController = require('../controller/societe');

router.post('/', societeController.createCompany);

module.exports = router;

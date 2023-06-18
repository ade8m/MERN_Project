const express = require('express');
const router = express.Router();
const UserControl = require('../controller/auth');

router.post('/add',UserControl.registre);
router.post('/l',UserControl.login);

module.exports = router;
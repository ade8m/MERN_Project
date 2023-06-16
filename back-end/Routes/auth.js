const express = require('express');
const router = express.Router();
const UserControl = require('../controller/auth');

router.post('/add',UserControl.registre);
router.get('/',UserControl.login);

module.exports = router;
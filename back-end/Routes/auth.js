const express = require('express');
const router = express.Router();
const UserControl = require('../controller/auth');
const Verify = require('../middelware/Authentification');

router.post('/add',UserControl.register);
router.post('/login',UserControl.login);

module.exports = router;
const express = require('express');
const router = express.Router();
const UserControl = require('../controller/auth');
const Verify = require('../middelware/Authentification');

router.post('/add',UserControl.registre);
router.post('/login',Verify.verifyToken,UserControl.login);

module.exports = router;
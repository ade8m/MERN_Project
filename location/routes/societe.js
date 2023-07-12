const Rcompany = require('../controller/societe');
const express =require('express');
const router = express.Router();

router.post('/',Rcompany.createSociete);
router.post('/login',Rcompany.login);
module.exports = router;
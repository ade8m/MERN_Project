const express =require('express');
const router =express.Router();
const societeControl = require('../controller/societe');

router.post("/New",societeControl.addsociete);

module.exports = router;
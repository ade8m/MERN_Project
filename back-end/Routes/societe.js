const express =require('express');
const router =express.Router();
const societeControl = require('../controller/societe');

router.post("/New",societeControl.addsociete);
router.post("/update",societeControl.UpdateSociete);
router.post("/delete",societeControl.DeleteSociete);
router.post("/get",societeControl.getSociete);

module.exports = router;
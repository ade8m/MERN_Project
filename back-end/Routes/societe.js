const express =require('express');
const router =express.Router();
const societeControl = require('../controller/societe');

router.post("/New",societeControl.addsociete);
router.post("/update:id",societeControl.UpdateSociete);
router.delete("/delete:id",societeControl.DeleteSociete);
router.get("/get:id",societeControl.getSociete);

module.exports = router;
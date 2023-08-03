const express =require('express');
const router = express.Router();
const societeControl = require('../controller/societe');

router.post("/:id",societeControl.addOtherProperties);
router.put("/update/:id",societeControl.UpdateSociete);
router.delete("/delete/:id",societeControl.DeleteSociete);
router.get("/get",societeControl.getSociete);
router.get("/get/:nomS",societeControl.getSocieteNom);
module.exports = router;
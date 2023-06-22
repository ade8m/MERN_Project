const express = require('express');
const router = express.Router();
const voitureRoutE = require('../controller/voiture');

router.post("/New",voitureRoutE.addVoiture);
router.post("/update/:id",voitureRoutE.UpdateVoiture);
router.delete("/delete/:id",voitureRoutE.DeleteVoiture);
router.get("/get/:id",voitureRoutE.getVoiture);

module.exports = router;
const express = require('express');
const router = express.Router();
const colorControl = require('../controller/couleur');

router.get('/',colorControl.getColor);

module.exports = router;
const express =require('express');
const router = express.Router();
const ModelControl = require('../controller/models');

router.get('/',ModelControl.getModels);

module.exports = router;
const express =require('express');
const router = express.Router();
const TypeControl = require('../controller/type');

router.get('/',TypeControl.getTypes);

module.exports = router;
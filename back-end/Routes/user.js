const express = require('express');
const router = express.Router();
const UserControl = require('../controller/user');
const Verify = require('../middelware/Authentification');


router.put("/update/:id",Verify.verifyToken,UserControl.UpdateUser);
router.delete("/delete/:id",UserControl.DeleteUser);
router.get("/get/:id",UserControl.getUser);
router.get("/get",UserControl.getAll);
module.exports = router;
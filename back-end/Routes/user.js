const express = require('express');
const router = express.Router();
const UserControl = require('../controller/user');


router.put("/update/:id",UserControl.UpdateUser);
router.delete("/delete/:id",UserControl.DeleteUser);
router.get("/get/:id",UserControl.getUser);
router.get("/get",UserControl.getAll);
module.exports = router;
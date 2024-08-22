const {getAlluser} = require("../controllers/userController");
const express = require("express");
const router = express.Router();


router.get("/catalog/users", getAlluser);

module.exports = router;
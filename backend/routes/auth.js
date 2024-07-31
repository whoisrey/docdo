const express = require("express");

const getJWT = require("../controllers/jwtController");

const router = express.Router();

router.post("/google", getJWT);

module.exports = router;

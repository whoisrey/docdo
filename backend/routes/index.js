const express = require("express");

const renderDocs = require("../controllers/docsController");

const router = express.Router();

router.get("/", renderDocs);

module.exports = router;

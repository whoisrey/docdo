const express = require("express");
const createError = require("http-errors");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.send(200, "잘 연결됐으니 걱정말게나");
  } catch (error) {
    next(createError(500));
  }
});

module.exports = router;

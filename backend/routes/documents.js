const express = require("express");

const {
  renderDocs,
  renderUserDocs,
  createDocs,
  modifyDocs,
  deleteDocs,
} = require("../controllers/document");

const jwtAuth = require("../middlewares/jwtAuth");

const router = express.Router();

router.get("/", jwtAuth, renderDocs);
router.post("/", jwtAuth, createDocs);
router.get("/:id", jwtAuth, renderUserDocs);
router.put("/:id", jwtAuth, modifyDocs);
router.delete("/:id", jwtAuth, deleteDocs);

module.exports = router;

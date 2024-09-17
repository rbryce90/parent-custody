const express = require("express");
const router = express.Router();
const DocumentController = require("../controller/documentController");

const documentController = new DocumentController();

router.get("/", async (req, res) => {
  res.send(await documentController.getAllDocuments());
});

module.exports = router;

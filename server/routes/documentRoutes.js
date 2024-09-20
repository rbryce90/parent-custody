const express = require("express");
const router = express.Router();
const DocumentController = require("../controller/documentController");

const documentController = new DocumentController();

router.get("/buckets", async (req, res) => {
  res.send(await documentController.getAllBuckets());
});

router.post("/bucket/:name", async (req, res) => {
  const { name } = req.params;
  res.send(await documentController.createBucket(name));
});

router.post("/pdf/upload", async (req, res) => {
  res.send(await documentController.uploadPdf());
});

module.exports = router;

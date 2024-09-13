const express = require("express");
const router = express.Router();
// router.use(authMiddleware);

router.get("/", (req, res) => {
  res.send("Admin Routes");
});

module.exports = router;

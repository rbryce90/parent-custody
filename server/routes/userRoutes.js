const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const userController = new UserController();

router.post("/register", async (req, res) => {
  await userController.createUser(req.body);
  res.send("User Created");
});

module.exports = router;

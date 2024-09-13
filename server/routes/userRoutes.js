const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const ErrorResponse = require("../model/errorModel");
const userController = new UserController();

router.post("/register", async (req, res) => {
  try {
    await userController.createUser(req.body);
    res.send("User Created");
  } catch (err) {
    res.status(500).send(new ErrorResponse(500, err.message));
  }
});

router.post("/login", async (req, res) => {
  try {
    res.send(await userController.loginIn(req.body));
  } catch (err) {
    res.status(500).send(new ErrorResponse(404, "Unauthorized"));
  }
});

module.exports = router;

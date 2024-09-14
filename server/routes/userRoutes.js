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
    console.log(err);
    res.status(500).send(new ErrorResponse(500, err.message));
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await userController.loginIn(req.body);
    res.send(user);
  } catch (err) {
    res.status(403).send(new ErrorResponse(403, "Unauthorized"));
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userController.getUserById(id);
    res.send(user);
  } catch (err) {
    res.status(500).send(new ErrorResponse(500, err.message));
  }
});

module.exports = router;

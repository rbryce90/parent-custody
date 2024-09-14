const express = require("express");
const ErrorResponse = require("../model/errorModel");
const router = express.Router();
const UserController = require("../controller/userController");
// router.use(authMiddleware);
const userController = new UserController();

router.get("/users", async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.send(users);
  } catch (err) {
    res.status(500).send(new ErrorResponse(500, err.message));
  }
});

module.exports = router;

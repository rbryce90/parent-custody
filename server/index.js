const express = require("express");
const userRouter = require("./routes/userRoutes.js");
const adminRouter = require("./routes/adminRoutes.js");
const configs = require("./config/configs.js");
const db = require("./client/db");
const app = express();

const env = "local";

const port = configs[env].port;
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

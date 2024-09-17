const express = require("express");
const userRouter = require("./routes/userRoutes.js");
const adminRouter = require("./routes/adminRoutes.js");
const documentRouter = require("./routes/documentRoutes.js");
const ErrorModel = require("./model/errorModel.js");
const configs = require("./config/configs.js");
const app = express();
const port = configs.port;
app.use(express.json());

// make this more standard
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .send(
      new ErrorModel(500, "This is an error message to be made good later")
    );
});

app.use("/api/document", documentRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

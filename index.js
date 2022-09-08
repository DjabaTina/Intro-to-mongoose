const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const userRouter = require("./routes/user.route");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("welcom to my server");
});
app.use("/users", userRouter);

async function start() {
  await dbConnect();

  app.listen(4000, () => {
    console.log("server is running on http://localhost:4000");
  });
}

start();

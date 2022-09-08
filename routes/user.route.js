const router = require("express").Router;

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require ("../controllers/user.controller");

const userRouter = router();

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:UserId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;

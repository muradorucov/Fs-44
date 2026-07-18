const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  editUser,
  changeUserStatus,
  deleteUser
} = require("../controllers/users.controller");
const authenticate = require("../middleware/authenticate");
const checkRole = require("../middleware/checkRole");
const usersRouter = express.Router();

// Admin only - get all users
usersRouter.get("/", authenticate, checkRole(['admin']), getAllUsers);

// Admin only - get single user
usersRouter.get("/:id", authenticate, checkRole(['admin']), getSingleUser);

// Admin and author - edit their own profile
usersRouter.put("/:id", authenticate, checkRole(['admin', 'author']), editUser);

// Admin only - change user status
usersRouter.patch("/:id/status", authenticate, checkRole(['admin']), changeUserStatus);

// Admin only - delete user
usersRouter.delete("/:id", authenticate, checkRole(['admin']), deleteUser);

module.exports = usersRouter;

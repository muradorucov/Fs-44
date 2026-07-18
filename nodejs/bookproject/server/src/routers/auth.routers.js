const express = require("express");
const { register, login, currentUser, logout, forgotPassword, resetPassword, createAdmin } = require("../controllers/auth.controller");
const authenticate = require("../middleware/authenticate");
const checkRole = require("../middleware/checkRole");
const authRouter = express.Router();


authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.get("/current-user", authenticate, currentUser);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/logout", authenticate, logout);
authRouter.post("/create-admin", authenticate, checkRole(['admin']), createAdmin);


module.exports = authRouter;
const express = require("express");
const authorRouter = require("./authors.routers");
const booksRouter = require("./books.routers");
const authRouter = require("./auth.routers");
const router = express.Router();


router.use("/auth", authRouter);
router.use("/authors", authorRouter);
router.use("/books", booksRouter);



module.exports = router;
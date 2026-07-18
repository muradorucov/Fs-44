const express = require("express");
const { getAllAuthors, createAuthor, getSingleAuthor, editAuthor, deleteAuthor, bookListForAuthor, changeAuthorStatus } = require("../controllers/authors.controller");
const authenticate = require("../middleware/authenticate");
const checkRole = require("../middleware/checkRole");
const authorRouter = express.Router();


// Admin only - get all authors
authorRouter.get("/", authenticate, checkRole(['admin']), getAllAuthors);

// Admin only - create author
authorRouter.post("/", authenticate, checkRole(['admin']), createAuthor);

// Author only - books of their own
authorRouter.get("/:id/books", authenticate, checkRole(['author']), bookListForAuthor);


// Admin only - get single author
authorRouter.get("/:id", authenticate, checkRole(['admin']), getSingleAuthor);

// Admin only - edit author
authorRouter.put("/:id", authenticate, checkRole(['admin']), editAuthor);

// Admin only - delete author and their books
authorRouter.delete("/:id", authenticate, checkRole(['admin']), deleteAuthor);


// Admin only - change author status
authorRouter.patch("/:id/status", authenticate, checkRole(['admin']), changeAuthorStatus);


module.exports = authorRouter;
const express = require("express");
const { getAllBooks, getAllBooksForAdmin,
  getSingleBookForAdmin, createBook, getSingleBook, editBook, deleteBook, changeBookStatus } = require("../controllers/books.controller");
const authenticate = require("../middleware/authenticate");
const checkRole = require("../middleware/checkRole");
const booksRouter = express.Router();


// Guest access - only active books
booksRouter.get("/", getAllBooks);

// Admin only - all books with all details
booksRouter.get("/for-admin", authenticate, checkRole(['admin']), getAllBooksForAdmin);

// Admin and author only
booksRouter.post("/", authenticate, checkRole(['admin', 'author']), createBook);

// Guest access - single active book
booksRouter.get("/:id", getSingleBook);

// Admin only - single book with all details
booksRouter.get("/:id/for-admin", authenticate, checkRole(['admin', "author"]), getSingleBookForAdmin);

// Admin and author - edit book
booksRouter.put("/:id", authenticate, checkRole(['admin', 'author']), editBook);

// Admin and author - delete book
booksRouter.delete("/:id", authenticate, checkRole(['admin', 'author']), deleteBook);

// Admin and author - change status
booksRouter.patch("/:id", authenticate, checkRole(['admin', 'author']), changeBookStatus);


module.exports = booksRouter;
const express = require("express");
const { getAllBooks, createBook, getSingleBook, editBook, deleteBook } = require("../controllers/books.controller");
const booksRouter = express.Router();



booksRouter.get("/", getAllBooks)
booksRouter.post("/", createBook)
booksRouter.get("/:id", getSingleBook)
booksRouter.put("/:id", editBook)
booksRouter.delete("/:id", deleteBook)



module.exports = booksRouter;
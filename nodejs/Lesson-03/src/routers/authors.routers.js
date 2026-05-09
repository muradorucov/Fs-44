const express = require("express");
const { getAllAuthors, createAuthor, getSingleAuthor, editAuthor, deleteAuthor, bookListForAuthor } = require("../controllers/authors.controller");
const authorRouter = express.Router();



authorRouter.get("/", getAllAuthors)

authorRouter.post("/", createAuthor)

authorRouter.get("/:id", getSingleAuthor)

authorRouter.put("/:id", editAuthor)

authorRouter.delete("/:id", deleteAuthor)

authorRouter.delete("/:id/books", bookListForAuthor)



module.exports = authorRouter;
const { v4: uuidv4 } = require("uuid");
const readFileUtil = require("../utils/readFile");
const writeFileUtil = require("../utils/writeFile");

const getAllBooks = (req, res) => {
  const books = readFileUtil("books")
    .filter(book => !book.isDelete);
  res.status(200).json(books)
}


const createBook = (req, res) => {
  const { title, description, authorId } = req.body;
  if (!title || !description || !authorId) {
    return res.status(400).json({
      message: "Title or Description or AuthorId not valid"
    })
  }

  const data = readFileUtil();
  const foundAuthor = data.authors.find(usr => usr.id === authorId && !usr.isDelete)
  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found"
    })
  }

  const newBook = {
    id: uuidv4(),
    title,
    description,
    authorId,
    isDelete: false
  }
  data.books.push(newBook);
  writeFileUtil(data);
  res.status(201).json(newBook)
}


const getSingleBook = (req, res) => {
  const id = req.params.id;
  const books = readFileUtil("books");
  const foundBook = books.find(book => book.id === id && !book.isDelete);

  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }

  res.status(200).json(foundBook)
}

const editBook = (req, res) => {
  const id = req.params.id;
  const { title, description, authorId } = req.body;

  const data = readFileUtil();

  const foundBook = data.books.find(book => book.id === id && !book.isDelete);
  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }

  foundBook.title = title || foundBook.title;
  foundBook.description = description || foundBook.description;
  foundBook.authorId = authorId || foundBook.authorId;

  writeFileUtil(data)
  res.status(200).json(foundBook)
}


const deleteBook = (req, res) => {
  const id = req.params.id;

  const data = readFileUtil();

  const foundBook = data.books.find(book => book.id === id && !book.isDelete);
  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }

  foundBook.isDelete = true;
  writeFileUtil(data);

  res.status(200).json({
    message: "Book delete successfully"
  })
}


module.exports = {
  getAllBooks,
  createBook,
  getSingleBook,
  editBook,
  deleteBook
}
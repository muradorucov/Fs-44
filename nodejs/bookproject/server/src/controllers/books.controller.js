const { v4: uuidv4 } = require("uuid");
const readFileUtil = require("../utils/readFile");
const writeFileUtil = require("../utils/writeFile");

const getAllBooks = (req, res) => {
  const books = readFileUtil("books")
    .filter(book => !book.isDelete && book.isActive);

  const formattedBooks = books.map(book => {
    const author = readFileUtil("authors").find(author => author.id === book.authorId);
    const user = readFileUtil("users").find(user => user.id === author.userID);
    return {
      ...book,
      authorname: user.fullname
    }
  })

  res.status(200).json(formattedBooks)
}

const getAllBooksForAdmin = (req, res) => {
  const books = readFileUtil("books")
    .filter(book => !book.isDelete);

  const formattedBooks = books.map(book => {
    const author = readFileUtil("authors").find(author => author.id === book.authorId);
    const user = readFileUtil("users").find(user => user.id === author.userID);
    return {
      ...book,
      authorname: user.fullname
    }
  })

  res.status(200).json(formattedBooks)
}

const createBook = (req, res) => {
  const { title, introDesc, description, authorId, thumbnail } = req.body;
  if (!title || !description || !authorId) {
    return res.status(400).json({
      message: "Title or Description or AuthorId not valid"
    })
  }

  const data = readFileUtil();
  const foundAuthor = data.authors.find(usr => usr.id === authorId)
  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found"
    })
  }

  const newBook = {
    id: uuidv4(),
    title,
    introDesc,
    description,
    authorId,
    isDelete: false,
    isActive: true,
    createdAt: new Date(),
    thumbnail: thumbnail || "http://localhost:3000/uploads/book.jpeg",
  }
  data.books.push(newBook);
  foundAuthor.books.push(newBook.id);
  writeFileUtil(data);
  res.status(201).json(newBook)
}


const getSingleBook = (req, res) => {
  const id = req.params.id;
  const books = readFileUtil("books");
  const foundBook = books.find(book => book.id === id && !book.isDelete && book.isActive);

  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }

  res.status(200).json(foundBook)
}

const getSingleBookForAdmin = (req, res) => {
  const id = req.params.id;
  const books = readFileUtil("books");
  const foundBook = books.find(book => book.id === id && !book.isDelete);

  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }
  const data = readFileUtil();

  if (req.user.role === "author") {
    const author = data.authors.find(author => author.userID === req.user.id);
    if (!author || author.id !== foundBook.authorId) {
      return res.status(403).json({
        message: "Forbidden - Authors can only delete their own books"
      })
    }
  }

  res.status(200).json(foundBook)
}

const editBook = (req, res) => {
  const id = req.params.id;
  const { title, introDesc, description } = req.body;

  const data = readFileUtil();

  const foundBook = data.books.find(book => book.id === id && !book.isDelete);
  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }


  if (req.user.role === "author") {
    const author = data.authors.find(author => author.userID === req.user.id);
    if (!author || author.id !== foundBook.authorId) {
      return res.status(403).json({
        message: "Forbidden - Authors can only edit their own books"
      })
    }
  }

  foundBook.title = title || foundBook.title;
  foundBook.description = description || foundBook.description;
  foundBook.introDesc = introDesc || foundBook.introDesc;

  writeFileUtil(data)
  res.status(200).json(foundBook)
}

const deleteBook = (req, res) => {
  const id = req.params.id;
  const data = readFileUtil();
  const foundBook = data.books.find(book => book.id === id && book.isDelete && book.isActive);
  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }
  if (req.user.role === "author") {
    const author = data.authors.find(author => author.userID === req.user.id);
    if (!author || author.id !== foundBook.authorId) {
      return res.status(403).json({
        message: "Forbidden - Authors can only delete their own books"
      })
    }
  }

  foundBook.isDelete = true;
  writeFileUtil(data);

  res.status(200).json({
    message: "Book delete successfully"
  })
}

const changeBookStatus = (req, res) => {
  const id = req.params.id;

  const data = readFileUtil();
  const foundBook = data.books.find(book => book.id === id && !book.isDelete && book.isActive);
  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }
  if (req.user.role === "author") {
    const author = data.authors.find(author => author.userID === req.user.id);
    if (!author || author.id !== foundBook.authorId) {
      return res.status(403).json({
        message: "Forbidden - Authors can only delete their own books"
      })
    }
  }

  foundBook.isActive = !foundBook.isActive;
  writeFileUtil(data);

  res.status(200).json({
    message: `Book status changed to ${foundBook.isActive ? 'active' : 'inactive'}`,
    book: foundBook
  });
};


module.exports = {
  getAllBooks,
  createBook,
  getSingleBook,
  editBook,
  deleteBook,
  changeBookStatus,
  getAllBooksForAdmin,
  getSingleBookForAdmin
}
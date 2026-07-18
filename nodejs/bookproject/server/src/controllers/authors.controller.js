const { v4: uuidv4 } = require("uuid");
const readFileUtil = require("../utils/readFile");
const writeFileUtil = require("../utils/writeFile");


const getAllAuthors = (req, res) => {
  const authors = readFileUtil("authors")
    .filter(usr => !usr.isDelete);
  res.status(200).json(authors)
}

const createAuthor = (req, res) => {
  const { fullName, email } = req.body;
  if (!fullName || !email) {
    return res.status(400).json({
      message: "FullName or Email not valid"
    })
  }

  const newAuthor = {
    id: uuidv4(),
    fullName,
    email,
    isDelete: false,
    status: 'active'
  }
  const data = readFileUtil();
  data.authors.push(newAuthor);
  writeFileUtil(data)


  res.status(201).json(newAuthor)
}


const getSingleAuthor = (req, res) => {
  const id = req.params.id;
  const data = readFileUtil();
  const foundAuthor = data.authors.find(usr => usr.id === id && !usr.isDelete);

  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found!"
    })
  }
  const books = data.books.filter(book => book.authorId === id && !book.isDelete);


  res.status(200).json({
    ...foundAuthor,
    books: books
  })
}


const editAuthor = (req, res) => {
  const id = req.params.id;
  const { fullName, email } = req.body;

  const data = readFileUtil();

  const foundAuthor = data.authors.find(usr => usr.id === id && !usr.isDelete);
  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found!"
    })
  }

  foundAuthor.fullName = fullName || foundAuthor.fullName;
  foundAuthor.email = email || foundAuthor.email;

  writeFileUtil(data)
  res.status(200).json(foundAuthor)
}


const deleteAuthor = (req, res) => {
  const id = req.params.id;

  const data = readFileUtil();
  const foundAuthor = data.authors.find(usr => usr.id === id && !usr.isDelete);

  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found!"
    })
  }

  foundAuthor.isDelete = true;

  // delete book for author
  const books = data.books.map(book => {
    if (book.authorId === id) {
      book.isDelete = true
    }
    return book
  })

  writeFileUtil(data);

  res.status(200).json({
    message: "User delete successfully"
  })
}


const bookListForAuthor = (req, res) => {
  const id = req.params.id;

  const data = readFileUtil();
  const foundAuthor = data.authors.find(usr => usr.id === id);

  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found!"
    })
  }

  const books = data.books.filter(book => book.authorId === foundAuthor.id && !book.isDelete);
  res.json(books)
}

const changeAuthorStatus = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  if (!status || !['active', 'inactive'].includes(status)) {
    return res.status(400).json({
      message: "Valid status is required (active/inactive)"
    });
  }

  const data = readFileUtil();
  const foundAuthor = data.authors.find(usr => usr.id === id && !usr.isDelete);

  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found!"
    });
  }

  foundAuthor.status = status;
  writeFileUtil(data);

  res.status(200).json({
    message: `Author status changed to ${status}`,
    author: foundAuthor
  });
};


module.exports = {
  getAllAuthors,
  createAuthor,
  editAuthor,
  getSingleAuthor,
  deleteAuthor,
  bookListForAuthor,
  changeAuthorStatus
}
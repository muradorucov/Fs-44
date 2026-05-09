const express = require("express")
const app = express();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid")
app.use(express.json());
// fs.readFileSync;
// fs.writeFileSync;

// utils
const readFileUtil = (dbname) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
  return dbname ? data[dbname] : data
}

const writeFileUtil = (data) => {
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2))
}


app.get("/", (_, res) => {
  res.send("Welcome to my Json server!")
})

// get all books api
app.get("/books", (req, res) => {
  const books = readFileUtil("books")
    .filter(book => !book.isDelete);
  res.status(200).json(books)
})


// create book api
app.post("/books", (req, res) => {
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
})


// get single book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const books = readFileUtil("books");
  const foundBook = books.find(book => book.id === id && !book.isDelete);

  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found!"
    })
  }

  res.status(200).json(foundBook)
})


// edit book
app.put("/books/:id", (req, res) => {
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
})


// delete book
app.delete("/books/:id", (req, res) => {
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
})





// get all authors api
app.get("/authors", (req, res) => {
  const authors = readFileUtil("authors")
    .filter(usr => !usr.isDelete);
  res.status(200).json(authors)
})


// create author api
app.post("/authors", (req, res) => {
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
    isDelete: false
  }
  const data = readFileUtil();
  data.authors.push(newAuthor);
  writeFileUtil(data)


  res.status(201).json(newAuthor)

})


// get single author
app.get("/authors/:id", (req, res) => {
  const id = req.params.id;
  const authors = readFileUtil("authors");
  const foundAuthor = authors.find(usr => usr.id === id && !usr.isDelete);

  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found!"
    })
  }

  res.status(200).json(foundAuthor)
})


// edit author
app.put("/authors/:id", (req, res) => {
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
})


// delete author
app.delete("/authors/:id", (req, res) => {
  const id = req.params.id;

  const data = readFileUtil();

  const foundAuthor = data.authors.find(usr => usr.id === id && !usr.isDelete);
  if (!foundAuthor) {
    return res.status(404).json({
      message: "Author not found!"
    })
  }

  foundAuthor.isDelete = true;
  writeFileUtil(data);

  res.status(200).json({
    message: "User delete successfully"
  })
})




app.listen(3000, () => {
  console.log("Server is runn... http://localhost:3000");
})







// author delete => author book's delete
// author=> books list
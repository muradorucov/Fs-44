const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcrypt');
const readFileUtil = require("../utils/readFile");
const writeFileUtil = require("../utils/writeFile");

const register = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;
    if (role !== "author") {
      return res.status(400).json({
        message: "Bad Request"
      })
    }
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = {
      id: uuidv4(),
      fullname: fullName,
      email,
      password: hashPassword,
      avatar: "http://localhost:3000/uploads/default.png",
      role,
      isDelete: false,
      createdAt: new Date()
    }
    const allData = readFileUtil()
    allData.users.push(newUser);

    const newAuthor = {
      id: uuidv4(),
      userID: newUser.id,
      books: []
    }
    allData.authors.push(newAuthor);

    writeFileUtil(allData)

    res.status(201).json({
      message: "User registeration successfully",
      user: newUser
    })
  } catch (error) {
    res.status(500).json({
      message: "Intrenal Server error",
      error: error.message
    })
  }
}


module.exports = {
  register
}
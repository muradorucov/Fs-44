const readFileUtil = require("../utils/readFile");
const writeFileUtil = require("../utils/writeFile");

const getAllUsers = (req, res) => {
  try {
    const data = readFileUtil();
    const users = data.users
      .filter(user => !user.isDelete)
      .map(user => ({
        ...user,
        password: undefined,
        createdAt: undefined
      }));

    res.status(200).json({
      message: "Users fetched successfully",
      users
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const getSingleUser = (req, res) => {
  try {
    const { id } = req.params;
    const data = readFileUtil();
    const foundUser = data.users.find(user => user.id === id && !user.isDelete);

    if (!foundUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      user: {
        ...foundUser,
        password: undefined,
        createdAt: undefined
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const editUser = (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, avatar } = req.body;

    const data = readFileUtil();
    const foundUser = data.users.find(user => user.id === id && !user.isDelete);

    if (!foundUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    foundUser.fullname = fullname || foundUser.fullname;
    foundUser.email = email || foundUser.email;
    foundUser.avatar = avatar || foundUser.avatar;

    writeFileUtil(data);

    res.status(200).json({
      message: "User updated successfully",
      user: {
        ...foundUser,
        password: undefined,
        createdAt: undefined
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const changeUserStatus = (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['active', 'inactive'].includes(status)) {
      return res.status(400).json({
        message: "Valid status is required (active/inactive)"
      });
    }

    const data = readFileUtil();
    const foundUser = data.users.find(user => user.id === id && !user.isDelete);

    if (!foundUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    foundUser.status = status;
    writeFileUtil(data);

    res.status(200).json({
      message: `User status changed to ${status}`,
      user: {
        ...foundUser,
        password: undefined,
        createdAt: undefined
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const data = readFileUtil();
    const foundUser = data.users.find(user => user.id === id && !user.isDelete);

    if (!foundUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    foundUser.isDelete = true;

    // If author, mark their books as deleted
    const author = data.authors.find(auth => auth.userID === id);
    if (author) {
      author.isDelete = true;
      data.books.forEach(book => {
        if (book.authorID === author.id) {
          book.isDelete = true;
        }
      });
    }

    writeFileUtil(data);

    res.status(200).json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  editUser,
  changeUserStatus,
  deleteUser
};

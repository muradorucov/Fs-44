const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcrypt');
const readFileUtil = require("../utils/readFile");
const writeFileUtil = require("../utils/writeFile");
var jwt = require('jsonwebtoken');
const config = require("../config");

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const users = readFileUtil("users");
    const userExist = users.find(user => user.email === email);
    if (userExist) {
      return res.status(400).json({
        message: "Alredy User"
      })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = {
      id: uuidv4(),
      fullname: fullName,
      email,
      password: hashPassword,
      avatar: "http://localhost:3000/uploads/user.png",
      role: "author",
      isDelete: false,
      isActive: true,
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
const createAdmin = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const users = readFileUtil("users");
    const userExist = users.find(user => user.email === email);
    if (userExist) {
      return res.status(400).json({
        message: "Alredy User"
      })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = {
      id: uuidv4(),
      fullname: fullName,
      email,
      password: hashPassword,
      avatar: "http://localhost:3000/uploads/user.png",
      role: "admin",
      isDelete: false,
      isActive: true,
      createdAt: new Date()
    }
    const allData = readFileUtil()
    allData.users.push(newUser);

    const newAdmin = {
      id: uuidv4(),
      userID: newUser.id
    }
    allData.admins.push(newAdmin);

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
const login = async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;
    const users = readFileUtil("users");
    const foundUser = users.find(user => user.email === email && !user.isDelete && user.isActive);
    if (!foundUser) {
      return res.status(404).json({
        message: "Email or Password is wrong"
      })
    }

    const confirmPassword = await bcrypt.compare(password, foundUser.password)
    if (!confirmPassword) {
      return res.status(400).json({
        message: "Email or Password is wrong"
      })
    }
    const authors = readFileUtil("authors");
    const author = authors.find(author => author.userID === foundUser.id);

    // tokencreate
    const accessToken = jwt.sign(
      {
        id: foundUser.id
      },
      config.jwt_secret,
      { expiresIn: '1h' }
    );

    res.cookie("accessToken", accessToken, {
      maxAge: 3600000,
      httpOnly: true,
      secure: false,
      sameSite: "LAX"
    })

    res.json({
      message: "Login Successfully",
      user: {
        ...foundUser,
        authorId: author.id,
        password: undefined,
        createdAt: undefined,
        isDelete: undefined,
        accessToken
      }
    })

  } catch (error) {

  }
}
const currentUser = async (req, res) => {
  try {
    const authors = readFileUtil("authors");
    const author = authors.find(author => author.userID === req.user.id);
    res.json({
      message: "SuccessFully",
      user: {
        ...req.user,
        authorId: author.id,
        password: undefined,
        createdAt: undefined,
        isDelete: undefined
      }
    })
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
      error: error.message
    })
  }
}
const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.json({
      message: "Logout Successfully"
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server"
    })
  }
}

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }
    const users = readFileUtil("users");
    const foundUser = users.find(user => user.email === email && !user.isDelete && user.isActive);
    if (!foundUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    // Generate reset token
    const resetToken = jwt.sign(
      { id: foundUser.id, type: 'reset' },
      config.jwt_secret,
      { expiresIn: '15m' }
    );

    res.cookie("resetToken", resetToken, {
      maxAge: 900000,
      httpOnly: true,
      secure: false,
      sameSite: "LAX"
    });

    res.json({
      message: "Password reset link sent to email",
      resetToken
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    if (!resetToken || !newPassword) {
      return res.status(400).json({
        message: "Reset token and new password are required"
      });
    }

    const decoded = jwt.verify(resetToken, config.jwt_secret);

    if (decoded.type !== 'reset') {
      return res.status(400).json({
        message: "Invalid reset token"
      });
    }

    const users = readFileUtil("users");
    const foundUser = users.find(user => user.id === decoded.id && !user.isDelete && user.isActive);

    if (!foundUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);
    foundUser.password = hashPassword;

    const allData = readFileUtil();
    const userIndex = allData.users.findIndex(u => u.id === foundUser.id);
    allData.users[userIndex] = foundUser;

    writeFileUtil(allData);
    res.clearCookie("resetToken");

    res.json({
      message: "Password reset successfully"
    });
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
      error: error.message
    });
  }
};

module.exports = {
  register,
  login,
  currentUser,
  logout,
  forgotPassword,
  resetPassword,
  createAdmin
}
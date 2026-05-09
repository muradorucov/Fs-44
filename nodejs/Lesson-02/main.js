const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

// users
let users = [
  {
    id: "42ba5fbf-348a-4ec9-bb5e-c157a62e0f93",
    userName: "Kamal",
    age: 18
  },
  {
    id: "872d1174-f5a7-48cf-be80-003f3d288cbe",
    userName: "Pervin",
    age: 18
  }
]

// users => GET  => All users
app.get("/users", (_, res) => {
  if (!users || !users.length) {
    return res.status(404).json({
      message: "users not found"
    })
  }
  res.json(users);
})


// users/:id => GET => Single user
// :id => dynamic router => params
app.get("/users/:id", (req, res) => {
  const userID = req.params.id;
  const foundUser = users.find(user => user.id === userID);

  if (!foundUser) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  res.status(200).json(foundUser)
})


// users => POST => CREATE USER
app.post("/users", (req, res) => {
  const body = req.body;
  const newUser = {
    ...body,
    id: uuidv4()
  }
  users.push(newUser)
  res.status(201).send(newUser)
})


// users/:id => DELETE => DELETE USER
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  users = users.filter(user => user.id !== id)
  res.json({
    message: "User delete successfully"
  })
})


// users/:id => PUT => EDIT USER
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  foundUser.userName = body.userName;
  foundUser.age = body.age;
  res.json(foundUser)
})

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  foundUser.userName = body.userName || foundUser.userName;
  foundUser.age = body.age || foundUser.age;
  res.json(foundUser)
})


app.listen(3300, () => {
  console.log("Server is Runnning.....");
})
import { useState } from "react";

function Form({ users, setUsers }) {
  const [id, setid] = useState(1);


  const formSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    setid(id + 1);
    setUsers([...users, newUser])
    // users = users.push(newUser);
    // console.log(users);


  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" >
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4" onSubmit={formSubmit}>
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Create User
        </h2>

        <input
          type="text"
          placeholder="username"
          name="username"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Create
        </button>

      </form>
    </div>
  )
}

export default Form
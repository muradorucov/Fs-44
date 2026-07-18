import React from "react";
import {  login } from "../../services/auth";
import { useNavigate } from "react-router"

function Login() {
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    try {
      const data = await login(user);
      if (data.user.role === "author") {
        navigate("/author")
      } else if (data.user.role === "admin") {
        navigate("/admin")
      }
    } catch (error) {
      console.log("Error in login page", error);
    }
  }
  return (
    <div className="flex flex-col h-[80vh] justify-center">

      <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 ">

        <h1 className="text-4xl font-black mb-8 text-center">
          Login
        </h1>

        <form
          className="space-y-5"
          onSubmit={formSubmit}
        >

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full h-13.75 px-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-13.75 px-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400"
          />

          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-2xl hover:bg-yellow-300 transition">
            Login
          </button>
        </form>
      </div>

    </div>
  );
}

export default Login;
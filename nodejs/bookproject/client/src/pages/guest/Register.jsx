import React from "react";

function Register() {
  return (
    <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h1 className="text-4xl font-black mb-8 text-center">
        Register
      </h1>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-[55px] px-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full h-[55px] px-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full h-[55px] px-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400"
        />

        <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-2xl hover:bg-yellow-300 transition">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;
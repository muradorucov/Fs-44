import React from "react";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h1 className="text-4xl font-black mb-8">
        Contact Us
      </h1>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full h-[55px] px-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full h-[55px] px-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400"
        />

        <textarea
          rows="6"
          placeholder="Message..."
          className="w-full p-5 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none focus:border-yellow-400 resize-none"
        />

        <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-2xl hover:scale-105 transition">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;
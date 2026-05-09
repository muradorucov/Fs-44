import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form); // backend yoxdursa burdan baxacaqsan

    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <h2 className="text-2xl font-bold mb-6">
            Contact Us
          </h2>

          <div className="mb-4">
            <label className="text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              rows="4"
              required
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl">
            Send Message
          </button>
        </form>

        {/* INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">
            Get in touch
          </h2>

          <p className="text-gray-600 mb-6">
            Have a project idea or just want to say hello?
            Fill out the form or contact us directly.
          </p>

          <div className="space-y-3 text-sm text-gray-700">
            <p>📧 info@mail.com</p>
            <p>📞 +994 50 000 00 00</p>
            <p>📍 Baku, Azerbaijan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
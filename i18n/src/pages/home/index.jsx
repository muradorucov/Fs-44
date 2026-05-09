import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Fast. Scale Smart.
          </h1>
          <p className="mt-4 text-gray-600">
            Modern React + Tailwind structure. Clean code, scalable architecture,
            and production-ready UI.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
            >
              Contact Us
            </Link>
            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
          <p className="text-gray-500">🔥 Demo Card</p>
          <h3 className="text-xl font-semibold mt-2">
            Clean UI Components
          </h3>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fast Development",
              desc: "Reusable components and clean structure."
            },
            {
              title: "Scalable Architecture",
              desc: "Built for growth and real-world projects."
            },
            {
              title: "Modern UI",
              desc: "TailwindCSS powered responsive design."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Ready to start your project?
        </h2>
        <Link
          to="/contact"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
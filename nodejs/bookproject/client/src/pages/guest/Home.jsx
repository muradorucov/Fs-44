import React, { useEffect, useState } from "react";
import { getAllActiveBooks } from "../../services/book";


function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getAllActiveBooks()
      .then((data) => {
        setBooks(data)
      })
  }, [])


  return (
    <section>

      <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-12">

        <div className="w-full md:w-[500px]">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full h-[55px] px-5 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none focus:border-yellow-400"
          />
        </div>

        <button className="bg-yellow-400 text-black font-bold px-6 h-[55px] rounded-2xl hover:scale-105 transition">
          Explore Books
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

        {books.map((book) => (
          <div
            key={book.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            <div className="h-70 overflow-hidden">
              <img
                src={book.thumbnail}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">
                {book.title}
              </h3>

              <p className="text-zinc-400 mb-5">
                {book.authorname}
              </p>

              <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-300 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
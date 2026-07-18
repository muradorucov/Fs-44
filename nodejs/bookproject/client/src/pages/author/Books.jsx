import React from "react";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    category: "Self Development",
    price: "$20",
    sales: 1240,
    status: "Published"
  },
  {
    id: 2,
    title: "Deep Work",
    category: "Productivity",
    price: "$18",
    sales: 980,
    status: "Draft"
  },
  {
    id: 3,
    title: "Mindset",
    category: "Psychology",
    price: "$25",
    sales: 870,
    status: "Published"
  },
  {
    id: 4,
    title: "Ikigai",
    category: "Lifestyle",
    price: "$16",
    sales: 510,
    status: "Pending"
  }
];

function Books() {
  return (
    <section>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">

        <div>
          <h1 className="text-5xl font-black mb-2">
            My Books
          </h1>

          <p className="text-zinc-500">
            Manage all your books from here.
          </p>
        </div>

        <button className="h-[55px] px-8 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition">
          + Create Book
        </button>
      </div>


      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="bg-zinc-950 border-b border-zinc-800">
              <tr>
                <th className="text-left px-6 py-5 text-zinc-400">
                  Title
                </th>

                <th className="text-left px-6 py-5 text-zinc-400">
                  Category
                </th>

                <th className="text-left px-6 py-5 text-zinc-400">
                  Price
                </th>

                <th className="text-left px-6 py-5 text-zinc-400">
                  Sales
                </th>

                <th className="text-left px-6 py-5 text-zinc-400">
                  Status
                </th>

                <th className="text-left px-6 py-5 text-zinc-400">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {books.map((book) => (
                <tr
                  key={book.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40 transition"
                >
                  <td className="px-6 py-5 font-semibold">
                    {book.title}
                  </td>

                  <td className="px-6 py-5 text-zinc-400">
                    {book.category}
                  </td>

                  <td className="px-6 py-5">
                    {book.price}
                  </td>

                  <td className="px-6 py-5 text-yellow-400 font-bold">
                    {book.sales}
                  </td>

                  <td className="px-6 py-5">
                    <span className="px-4 py-2 rounded-full text-sm bg-zinc-950 border border-zinc-700">
                      {book.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <button className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:opacity-80 transition">
                        Edit
                      </button>

                      <button className="px-4 py-2 rounded-xl bg-red-500 text-white font-semibold hover:opacity-80 transition">
                        Delete
                      </button>

                      <button className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:opacity-80 transition">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Books;
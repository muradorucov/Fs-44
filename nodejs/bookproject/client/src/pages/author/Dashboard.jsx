import React from "react";

const recentBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    sales: 1240
  },
  {
    id: 2,
    title: "Deep Work",
    sales: 980
  },
  {
    id: 3,
    title: "Mindset",
    sales: 870
  }
];

function Dashboard() {
  return (
    <section>
      
      <div className="mb-10">
        <h1 className="text-5xl font-black mb-3">
          Dashboard
        </h1>

        <p className="text-zinc-400">
          Welcome back author. Here is your platform analytics.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500 mb-3">Total Books</p>

          <h2 className="text-5xl font-black text-yellow-400">
            24
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500 mb-3">Total Readers</p>

          <h2 className="text-5xl font-black text-green-400">
            18K
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500 mb-3">Monthly Revenue</p>

          <h2 className="text-5xl font-black text-blue-400">
            $4.2K
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-500 mb-3">Book Rating</p>

          <h2 className="text-5xl font-black text-pink-400">
            4.9
          </h2>
        </div>
      </div>

      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        <div className="xl:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">
              Recent Book Performance
            </h3>

            <button className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold">
              Export
            </button>
          </div>

          <div className="space-y-5">
            
            {recentBooks.map((book) => (
              <div
                key={book.id}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold">
                    {book.title}
                  </h4>

                  <p className="text-zinc-500">
                    Total Sales
                  </p>
                </div>

                <div>
                  <span className="text-2xl font-black text-yellow-400">
                    {book.sales}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          
          <h3 className="text-2xl font-bold mb-8">
            Quick Actions
          </h3>

          <div className="flex flex-col gap-4">
            
            <button className="h-[55px] rounded-2xl bg-yellow-400 text-black font-bold hover:scale-[1.02] transition">
              Create New Book
            </button>

            <button className="h-[55px] rounded-2xl bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 transition">
              View Analytics
            </button>

            <button className="h-[55px] rounded-2xl bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 transition">
              Manage Profile
            </button>

            <button className="h-[55px] rounded-2xl bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 transition">
              Publish Drafts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
import React from "react";
import PrivateRouter from "../../provider/privateRouter";

const activities = [
  {
    id: 1,
    title: "New author registered",
    time: "2 min ago"
  },
  {
    id: 2,
    title: "Book deleted by moderator",
    time: "15 min ago"
  },
  {
    id: 3,
    title: "Server backup completed",
    time: "1 hour ago"
  }
];

function Dashboard() {
  return (
    <section>

      <div className="mb-10">

        <h1 className="text-5xl font-black mb-3">
          Admin Dashboard
        </h1>

        <p className="text-zinc-500">
          Monitor the entire platform from one place.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <p className="text-zinc-500 mb-4">
            Total Users
          </p>

          <h2 className="text-5xl font-black text-red-500">
            12K
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <p className="text-zinc-500 mb-4">
            Total Authors
          </p>

          <h2 className="text-5xl font-black text-blue-400">
            340
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <p className="text-zinc-500 mb-4">
            Total Books
          </p>

          <h2 className="text-5xl font-black text-yellow-400">
            5.4K
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <p className="text-zinc-500 mb-4">
            Monthly Revenue
          </p>

          <h2 className="text-5xl font-black text-green-400">
            $18K
          </h2>
        </div>
      </div>


      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between mb-8">

            <h3 className="text-2xl font-bold">
              Recent Activities
            </h3>

            <button className="px-5 py-2 rounded-xl bg-red-500 font-semibold hover:scale-105 transition">
              View Logs
            </button>
          </div>

          <div className="space-y-5">

            {activities.map((item) => (
              <div
                key={item.id}
                className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-center justify-between"
              >

                <div>
                  <h4 className="font-bold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-zinc-500">
                    System notification
                  </p>
                </div>

                <span className="text-zinc-400">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <h3 className="text-2xl font-bold mb-8">
            Quick Actions
          </h3>

          <div className="flex flex-col gap-4">

            <button className="h-[55px] rounded-2xl bg-red-500 font-bold hover:scale-[1.02] transition">
              Add Moderator
            </button>

            <button className="h-[55px] rounded-2xl bg-black border border-zinc-800 hover:bg-zinc-800 transition">
              Manage Reports
            </button>

            <button className="h-[55px] rounded-2xl bg-black border border-zinc-800 hover:bg-zinc-800 transition">
              Suspend User
            </button>

            <button className="h-[55px] rounded-2xl bg-black border border-zinc-800 hover:bg-zinc-800 transition">
              Database Backup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
import React from "react";

const users = [
  {
    id: 1,
    name: "Murad Orujov",
    email: "murad@gmail.com",
    role: "Admin",
    status: "Active"
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Author",
    status: "Blocked"
  },
  {
    id: 3,
    name: "Alice Smith",
    email: "alice@gmail.com",
    role: "Guest",
    status: "Active"
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@gmail.com",
    role: "Author",
    status: "Pending"
  }
];

function Users() {
  return (
    <section>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">

        <div>
          <h1 className="text-5xl font-black mb-2">
            Users Management
          </h1>

          <p className="text-zinc-500">
            Control every account on the platform.
          </p>
        </div>

        <button className="h-[55px] px-8 rounded-2xl bg-red-500 font-bold hover:scale-105 transition">
          + Create User
        </button>
      </div>


      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead className="bg-black border-b border-zinc-800">
              <tr>

                <th className="text-left px-6 py-5 text-zinc-500">
                  User
                </th>

                <th className="text-left px-6 py-5 text-zinc-500">
                  Email
                </th>

                <th className="text-left px-6 py-5 text-zinc-500">
                  Role
                </th>

                <th className="text-left px-6 py-5 text-zinc-500">
                  Status
                </th>

                <th className="text-left px-6 py-5 text-zinc-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40 transition"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="w-[45px] h-[45px] rounded-full bg-red-500 flex items-center justify-center font-bold">
                        {user.name[0]}
                      </div>

                      <span className="font-semibold">
                        {user.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-zinc-400">
                    {user.email}
                  </td>

                  <td className="px-6 py-5">

                    <span className="px-4 py-2 rounded-full bg-black border border-zinc-700 text-sm">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${user.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : user.status === "Blocked"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                    >
                      {user.status}
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

export default Users;
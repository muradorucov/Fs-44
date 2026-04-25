import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Table({ users, setUsers }) {
  return (
    <div className="p-6">
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {
              users.map(user => <tr className="hover:bg-gray-50 transition" key={user.id}>
                <td className="px-6 py-4 font-medium">{user.id}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                    <FaEdit />
                  </button>
                  <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition">
                    <MdDelete />
                  </button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
import { useEffect, useState } from "react"
import { getAllCategories } from "../services/categories";
import { FaEdit, FaTrash } from "react-icons/fa";

function Categories() {
  const [categories, setCategories] = useState([]);

  const getAllDataFetch = async () => {
    try {
      const data = await getAllCategories()
      setCategories(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllDataFetch()
  }, [])

  return (
    <div className="my-6">
      <h1 className="text-2xl font-semibold mb-4">Categories</h1>
      <div className="flex justify-between items-center gap-4 mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="search"
            placeholder="Axtar..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        <button
          className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 active:scale-95 transition"
        >
          + Create
        </button>
      </div>
      <div className="overflow-x-auto rounded-2xl shadow-md">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Category Name</th>
              <th className="p-3">Description</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.name || "UnKnow"}</td>
                <td className="p-3">{item.description || "UnKnow"}</td>

                <td className="p-3">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>

                    <button
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Categories
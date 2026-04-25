import axios from "axios"
import Orders from "./components/Orders"
import Suppliers from "./components/Suppliers"
import { useState } from "react"
import Categories from "./components/Categories"

function App() {
  const [pages, setPages] = useState({
    suppliers: true,
    orders: false,
    categories: false
  })
  const getPage = (name) => {
    const data = Object.keys(pages).reduce((acc, key) => {
      acc[key] = key === name;
      return acc
    }, {})
    setPages(data)
  }
  return (
    <div className="max-w-330 mx-auto w-[80%] my-10">
      <div className="grid grid-cols-3 gap-7.5">
        <button
          onClick={() => getPage("suppliers")}
          className="px-5 py-2 rounded-xl bg-blue-500 text-white font-medium shadow-md hover:bg-blue-600 active:scale-95 transition"
        >
          Suppliers
        </button>

        <button
          onClick={() => getPage("orders")}
          className="px-5 py-2 rounded-xl bg-green-500 text-white font-medium shadow-md hover:bg-green-600 active:scale-95 transition"
        >
          Orders
        </button>

        <button
          onClick={() => getPage("categories")}
          className="px-5 py-2 rounded-xl bg-purple-500 text-white font-medium shadow-md hover:bg-purple-600 active:scale-95 transition"
        >
          Categories
        </button>
      </div>
      <div>
        {pages.orders && <Orders />}
        {pages.suppliers && <Suppliers />}
        {pages.categories && <Categories />}
      </div>

    </div>
  )
}

export default App
import React, { useEffect, useState } from "react";
import { getAllProductsService } from "../../service";
import { useDispatch } from "react-redux";
import { addtoCartAction } from "../../redux/actions/cart.actions";

function Shop() {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  const getData = async (params) => {
    try {
      const data = await getAllProductsService();
      setProducts(data.products)
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const addToCart = (maqa) => {
    dispatch(addtoCartAction(maqa))
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          products.map(pro => <div className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            key={pro.id}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={pro.thumbnail}
                alt={pro.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
                {pro.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-sm font-semibold line-clamp-2">
                {pro.title}
              </h2>

              <p className="text-xs text-gray-500 line-clamp-2">
                {pro.description}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-between mt-1">
                <span className="text-yellow-500 text-sm">
                  ⭐ {pro.rating}
                </span>
                <span className="text-xs text-gray-400">
                  Stock: {pro.stock}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="text-lg font-bold text-black">
                    ${pro.price}
                  </span>
                  <span className="ml-2 text-xs text-green-600">
                    -{pro.discountPercentage}%
                  </span>
                </div>
              </div>

              {/* Button */}
              <button className="mt-3 bg-black text-white text-sm py-2 rounded-lg transition-all duration-300 hover:bg-gray-800"
                onClick={() => addToCart(pro)}
              >
                Add to Cart
              </button>
            </div>
          </div>)
        }

      </div>
    </div >
  );
}

export default Shop;
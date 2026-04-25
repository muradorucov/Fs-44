import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseAction } from "../../redux/actions/cart.actions";


function Cart() {

  const cart = useSelector(x => x);
  const dis = useDispatch()

  const increase = (id) => {
    dis(increaseAction(id))
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">{t("cartTitle")}</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <h2 className="text-sm font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-500">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => decrease(item.id)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => increase(item.id)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>

                {/* Item total */}
                <p className="w-16 text-right font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
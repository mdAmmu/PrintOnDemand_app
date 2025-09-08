"use client";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Custom T-Shirt", price: 20, quantity: 1 },
    { id: 2, name: "Coffee Mug", price: 12, quantity: 2 },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-6">
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16 border rounded-lg px-2 py-1 text-center"
                    />
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty</p>
          )}
        </div>

        {/* Order Summary & Checkout */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p>${shipping}</p>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <p>Total</p>
            <p>${total}</p>
          </div>

          {/* Checkout Form */}
          <h3 className="text-lg font-semibold mb-3">Checkout</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
            <textarea
              placeholder="Shipping Address"
              className="w-full border px-3 py-2 rounded-lg"
              rows={3}
              required
            ></textarea>
            <select className="w-full border px-3 py-2 rounded-lg">
              <option>Credit/Debit Card</option>
              <option>PayPal</option>
              <option>Cash on Delivery</option>
            </select>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

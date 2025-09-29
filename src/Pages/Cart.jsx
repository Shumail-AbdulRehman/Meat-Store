import React from 'react';
import CartItem from '../components/customs/CartItem';
import { useSelector } from 'react-redux';

function Cart() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - items */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Items ({totalQuantity})
              </h2>

              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <div>
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side - summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    SAR {Number(totalPrice).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span className="font-medium text-gray-500">
                    Calculated at checkout
                  </span>
                </div>

                <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>SAR {Number(totalPrice).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition mb-4">
                Proceed to Checkout
              </button>

              <p className="text-center text-sm text-gray-500">
                Secure payments <span className="mx-1">•</span> Halal-certified suppliers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

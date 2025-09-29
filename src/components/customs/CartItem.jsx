import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity({ id: item.id }));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({ id: item.id }));
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
      
      {/* Left: Product info */}
      <div className="flex items-center gap-4 flex-1">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
          <p className="text-sm text-gray-500">
            {item.quantity * 500}g <span className="mx-1">•</span> Fresh
          </p>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
        
        {/* Quantity buttons */}
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <button
            onClick={handleDecrease}
            className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition rounded-l"
          >
            −
          </button>
          <span className="px-4 py-1 text-sm font-medium border-x border-gray-300">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition rounded-r"
          >
            +
          </button>
        </div>

        {/* Price */}
        <div className="text-left sm:text-right min-w-[80px]">
          <p className="text-base font-bold text-gray-900">
            SAR {item.totalPrice}
          </p>
        </div>

        {/* Remove button */}
        <button
          onClick={handleRemove}
          className="text-gray-400 hover:text-red-600 transition"
          title="Remove item"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

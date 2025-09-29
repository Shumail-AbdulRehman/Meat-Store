
import React from "react";

function CategoriesList({ categories, active, setActive }) {
  return (
    <div className="bg-white w-full h-[85px] sticky top-0 z-50 flex items-center shadow-md">
      <ul className="flex items-center gap-4 w-full px-6">
        {categories.map((item) => (
          <li key={item} className="list-none">
            <button
              onClick={() => setActive(item)}
              className={`px-4 py-2 rounded-lg font-medium text-lg transition-colors
                ${
                  active === item
                    ? "bg-red-600 text-white font-bold shadow-md"
                    : "text-gray-700 hover:text-red-600"
                }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;


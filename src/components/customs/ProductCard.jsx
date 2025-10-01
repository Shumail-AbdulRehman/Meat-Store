
import React from "react";
import { ShoppingCart } from "lucide-react";
import checking from "../../assets/checking.jpeg";
import { addItem } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner"

function ProductCard({ product }) {

  const dispatch=useDispatch();
  const quantity=1
  const addToCart=(product)=>
  {

      dispatch(addItem({product,quantity}))
      toast.success(`${product.title} added to cart 🛒`, {
  description: "Check your cart to proceed with checkout.",
  style: {
    backgroundColor: "#FFFFFF", 
    color: "#dc2626",
    border: "1px solid #991b1b", 
  }
})

  }
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all overflow-hidden w-full max-w-xs border border-gray-200">
      
      <div className="w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image ? product.image : checking}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 text-gray-800 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-gray-900">{product.title}</h3>

        <p className="text-lg font-semibold text-red-600 mb-3">
          SAR {product.price}{" "}
          <span className="text-sm text-gray-500">/ {product.unit}</span>
        </p>

        <div className="flex items-center mt-auto justify-center">
          <button
  onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  }}
  className="bg-red-600 hover:bg-red-700 text-white text-md px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-transform transform active:scale-95"
>
  <ShoppingCart size={16} /> Add to Cart
</button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;


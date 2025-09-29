import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/customs/LoadingSpinner';
import userService from '../appwrite/services';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';


function Product() {
    const dispatch=useDispatch();
    const{id}=useParams();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [product,setProduct]=useState(null);
  
    const addToCart=()=>
    {
        dispatch(addItem({ product, quantity }));    }


  useEffect(()=>
    {
        ;(async()=>
        {
            try {
                setLoading(true)
                const fetchProduct=await userService.getProduct(id);
                if(fetchProduct) setProduct(fetchProduct);
            } catch (error) {
                console.log(error);
            } finally
            {
                setLoading(false);
            }
        })();
    },[id])

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) {
    return (
      <LoadingSpinner/>
    );
  }

  else if(product==null)
  {
    return(
        <h1 className='min-h-screen w-full font-bold text-3xl '>No product with this id is Found</h1>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 bg-white flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[430px] rounded-lg"
          />
        </div>

        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          {/* <div className="text-sm text-gray-500 mb-4">
            <span className="hover:text-gray-700 cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:text-gray-700 cursor-pointer">Category</span>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Product</span>
          </div> */}

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {product.title}
          </h1>

          <p className="text-sm text-gray-500 mb-5">
            <span>Halal certified</span>
            <span className="mx-1">•</span>
            <span>Freshly cut on order</span>
            <span className="mx-1">•</span>
            <span>Sourced from local farms across KSA</span>
          </p>

          <div className="flex items-center gap-3 mb-6">
            <p className="text-3xl font-bold text-gray-900">
              SAR {product.price}
            </p>
            <span className="text-base text-gray-600">per {product.unit}</span>
            <span className="ml-2 px-3 py-1 text-xs font-semibold bg-green-600 text-white rounded-full">
              In Stock
            </span>
          </div>

          <div className="mb-5">
            <p className="text-sm font-semibold text-gray-700 mb-2">Weight</p>
            <span className="inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded border border-gray-300">
              1 kg (Fixed)
            </span>
          </div>

          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Quantity</p>
            <div className="flex items-center border border-gray-300 rounded w-32">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-50 transition"
              >
                −
              </button>
              <span className="flex-1 text-center py-2 text-lg font-medium border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-50 transition"
              >
                +
              </button>
            </div>
          </div>

          <button
  onClick={addToCart}
  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition transform active:scale-95 w-full md:w-auto flex items-center justify-center gap-2"
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
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
  Add to Cart
</button>

        </div>
      </div>
    </div>
  );
}

export default Product;
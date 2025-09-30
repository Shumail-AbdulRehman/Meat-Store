import React, { useEffect, useState } from "react";
import CategoriesList from "../components/customs/CategoriesList";
import ProductCard from "../components/customs/ProductCard";
import userService from "../appwrite/services";
import LoadingSpinner from "../components/customs/LoadingSpinner";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Categories() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState(null);
  const [totalProducts, setTotalProducts] = useState("0");
  const [sideOpen, setSideOpen] = useState(false);

  const categories = ["All", "Beef", "Lamb", "Chicken", "Mutton", "Special Pack"];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (selectedCategory === "All") {
          const allProducts = await userService.getProducts();
          setProducts(allProducts.documents);
          setTotalProducts(allProducts.total);
          console.log(allProducts);
        } else {
          const fetchedProducts = await userService.getProductsByCategory(selectedCategory);
          setProducts(fetchedProducts.documents);
          setTotalProducts(fetchedProducts.total);
        }
      } catch (error) {
        console.log("error when fetching:=>", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900">
      <div className="hidden  sm:block">
        <CategoriesList
          categories={categories}
          active={selectedCategory}
          setActive={setSelectedCategory}
        />
      </div>

      <div className="sm:hidden sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold text-red-600">{selectedCategory}</h2>
        <Menu
          onClick={() => setSideOpen(true)}
          className="h-7 w-7 text-gray-900 cursor-pointer"
        />
      </div>

      {sideOpen && (
        <div
          className="gap-3 px-6 py-6 lg:hidden font-medium"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "250px",
            zIndex: 999,
            backgroundColor: "rgba(255, 255, 255, 255)",
            backdropFilter: "blur(10px)",
            boxShadow: "-10px 0 10px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <X
            onClick={() => setSideOpen(false)}
            className="h-8 w-8 mb-4 hover:font-semibold hover:cursor-pointer text-black"
          />
          
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Categories</h3>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSideOpen(false);
              }}
              className={`w-full text-left py-2 px-3 rounded mb-2 hover:cursor-pointer hover:font-semibold transition ${
                selectedCategory === category
                  ? "bg-red-600 text-white font-semibold"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-6 px-8 py-6">
        <h2 className="text-xl md:text-2xl font-bold text-red-600 hidden lg:block">
          {selectedCategory}
        </h2>
        <h2 className="font-semibold text-lg text-gray-700 lg:ml-auto">
          Showing 1–{totalProducts}
        </h2>
      </div>

      <div className="px-8 mt-10">
        <div className="flex gap-12 justify-center-safe items-center flex-wrap">
          {products &&
            products.map((item) => (
              <Link key={item.$id} to={item.$id}>
                <ProductCard product={item} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
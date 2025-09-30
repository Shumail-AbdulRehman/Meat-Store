import React, { useEffect, useState } from "react"
import userService from "../../appwrite/services"
import ProductCard from "./ProductCard"
import LoadingSpinner from "./LoadingSpinner"

function FeaturedProducts() {
  const [loading, setLoading] = useState(false)
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true)
      try {
        const products = await userService.getFeaturedProducts()
        console.log(products.documents)
        setFeaturedProducts(products.documents || [])
      } catch (error) {
        console.log("error while fetching featured products", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <section className="w-full py-10 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold  mt-3 mb-6 text-black">
          🔥 Featured Products
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our handpicked premium cuts — always fresh, halal, and full
          of flavor.
        </p>

        {featuredProducts.length === 0 ? (
          <p className="text-gray-500">No featured products available</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-10">
            {featuredProducts.map((product) => (
              <div key={product.$id} className="flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProducts

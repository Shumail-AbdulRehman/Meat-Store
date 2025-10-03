import React, { useEffect, useState } from "react"
import userService from "../../appwrite/services"
import ProductCard from "./ProductCard"
import LoadingSpinner from "./LoadingSpinner"
import { Link } from "react-router-dom"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <section className="w-full py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-6 text-black">
          🔥 Featured Products
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our handpicked premium cuts — always fresh, halal, and full
          of flavor.
        </p>

        {featuredProducts.length === 0 ? (
          <p className="text-gray-500">No featured products available</p>
        ) : (
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "center",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="flex items-center">
                {featuredProducts.map((product) => (
                  <CarouselItem
                    key={product.$id}
                    className=" basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/4 flex justify-center"
                  >
                    <Link to={`/categories/${product.$id}`} className="w-full max-w-sm flex justify-center">
                      <ProductCard product={product} />
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0" />
              <CarouselNext className="absolute right-0" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProducts
import React, { useEffect, useState } from 'react'
import userService from '../../appwrite/services'
import LoadingSpinner from './LoadingSpinner';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function RelatedProducts({productCategory, productId}) {
  const [loading, setLoading] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    console.log(relatedProducts);
  }, [relatedProducts])

  useEffect(() => {
    ;(async() => {
      try {
        setLoading(true)
        const products = await userService.getProductsByCategory(productCategory);
        console.log("related products here:=>", products)
        const filteredProducts = products.documents.filter((product) => product.$id !== productId);
        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.log("related Products comp error=>", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [productCategory, productId])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <section className="w-full py-5 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-extrabold mt-3 mb-6 text-black">
          Related Products
        </h2>
        {relatedProducts.length === 0 ? (
          <p className="text-gray-500">No Related products available</p>
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
                {relatedProducts.map((product) => (
                  <CarouselItem
                    key={product.$id}
                    className="basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/4 flex justify-center"
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

export default RelatedProducts
import React, { useEffect, useState } from 'react'
import userService from '../../appwrite/services'
import LoadingSpinner from './LoadingSpinner';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function RelatedProducts({productCategory,productId}) {

    const [loading,setLoading]=useState(false);

    const [relatedProducts,setRelatedProducts]=useState([]);


    useEffect(()=>
    {
        console.log(relatedProducts);

    },[relatedProducts])

    useEffect(()=>
    { 
        ;(async()=>
        {
           try {
            setLoading(true)
            const products=await userService.getProductsByCategory(productCategory);
            console.log("related products here:=>",products)
 
            const filteredProducts=products.documents.filter((product)=> product.$id!==productId);
 
            setRelatedProducts(filteredProducts);
           } catch (error) {
                console.log("related Products comp error=>",error);
           } finally
           {
            setLoading(false);
           }    
        })
        ();
    },[productCategory,productId])

   if (loading) {
    return <LoadingSpinner />
  }

  return (

    
    <section className="w-full py-5 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-extrabold  mt-3 mb-6 text-black">
          Related Products
        </h2>
        {/* <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our handpicked premium cuts — always fresh, halal, and full
          of flavor.
        </p> */}

        {relatedProducts.length === 0 ? (
          <p className="text-gray-500">No Related products available</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-10">
            {relatedProducts.map((product) => (
              <Link to={`/categories/${product.$id}`} key={product.$id} className="flex-shrink-0">
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default RelatedProducts

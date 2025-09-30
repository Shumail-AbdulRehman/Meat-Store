
import React from 'react'
import heroImage from "../assets/plzwork.jpg"
import { ArrowRight } from "lucide-react"
import { Link } from 'react-router-dom'

function Store() {
  return (
    <section className="w-full h-auto lg:h-[900px] bg-gradient-to-tr from-red-200 via-red-100 to-white
 text-gray-900 flex flex-col pt-10 lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24">
      
      <div className="flex-1 sm:pl-10 lg:pl-0 flex flex-col justify-center text-center md:text-left space-y-6">
        <span className="inline-block bg-red-100 text-red-700 text-sm md:text-base font-medium px-4 py-1 rounded-full self-center md:self-start">
          🥩 Ethically Sourced, Butcher-Grade Quality
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Elevate Every Cut with <br /> 
          <span className="text-red-600">Bold, Honest Flavor</span>
        </h1>

        <p className="max-w-xl text-gray-600 text-lg">
          Grass-fed beef, and pasture-raised poultry — carefully curated by 
          experts and delivered through a strict cold-chain, so every cut arrives fresh and flawless. 
          That’s <span className="text-red-500 font-semibold">🔥 red-hot</span> quality you can taste.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link to={"/categories"} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-lg shadow transition text-white">
            Explore Our Categories
            <ArrowRight size={20} />
          </Link>
        </div>

        <ul className="mt-4 flex flex-wrap gap-3 text-sm md:text-base">
          <li className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full border border-red-200">
            ❄️ Cold-chain
          </li>
          <li className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full border border-red-200">
            🌿 Grass-fed
          </li>
          <li className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full border border-red-200">
            🛡️ No antibiotics
          </li>
          <li className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full border border-red-200">
            🥩 Prime beef
          </li>
          <li className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full border border-red-200">
            🍗 Pasture chicken
          </li>
        </ul>
      </div>

      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={heroImage}
          alt="Premium Meat"
          className="rounded-2xl shadow-lg object-cover w-full max-w-lg h-[600px]"
        />
      </div>
    </section>
  )
}

export default Store


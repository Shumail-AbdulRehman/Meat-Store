
import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-tr from-red-200 via-red-100 to-white min-h-screen text-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">About Red Dunes Meats</h1>
          <p className="text-gray-600 mt-2">
            Quality halal meats for Saudi Arabia. Simple story, clear purpose.
          </p>
        </div>

        <div className="bg-red-50 rounded-xl border border-red-100 p-6">
          <h2 className="font-semibold text-lg mb-2 text-red-600">Who We Are</h2>
          <p className="text-gray-700">
            We are an online meat store based in Saudi Arabia. Our goal is to
            make buying fresh, halal meat easy and reliable. We focus on good
            quality, fair prices, and on-time delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl border border-red-100 p-6">
            <h2 className="font-bold text-lg mb-2 text-red-600">What We Do</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Source halal-certified beef, lamb, chicken, and more</li>
              <li>Prepare cuts to order by skilled butchers</li>
              <li>Deliver fresh across major cities in Saudi Arabia</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl border border-red-100 p-6">
            <h2 className="font-bold text-lg mb-2 text-red-600">At a Glance</h2>
            <p className="text-gray-700">
              • Fast delivery • Clear pricing • Friendly support
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl border border-red-100 p-6">
          <h2 className="font-bold text-lg mb-2 text-red-600">Why Shop With Us</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>100% halal assurance</li>
            <li>Fresh, temperature-controlled delivery</li>
            <li>Easy shopping: search, add to cart, and checkout</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-xl border border-red-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="font-bold text-lg text-red-600">Ready to order?</h2>
            <p className="text-gray-700">
              Browse categories and build your cart in minutes.
            </p>
          </div>
          <Link
            to={"/categories"}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}


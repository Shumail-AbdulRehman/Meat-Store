import React from "react"
import { Star } from "lucide-react"

function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha K.",
      feedback:
        "Best meat I’ve ever ordered online! Fresh, clean, and packed perfectly. My family loved it.",
    },
    {
      name: "Bilal R.",
      feedback:
        "Finally a place I can trust for halal and grass-fed options. Easy payment and quick delivery!",
    },
    {
      name: "Sara M.",
      feedback:
        "The quality is unmatched — juicy cuts and great taste. I’m never going back to the supermarket.",
    },
    // {
    //   name: "Shumail Abdul",
    //   feedback:
    //   "Madina Meats always delivers fresh, tender, 100% halal meat right to my door. Fast service and top quality every time!"
    // }
  ]

  return (
    <section className=" text-white py-13 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-black ">
          What Our Customers Say
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-red-700/40 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-red-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="currentColor"
                    className="drop-shadow"
                  />
                ))}
              </div>

              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{t.feedback}"
              </p>

              <h4 className="font-semibold text-lg text-red-400">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

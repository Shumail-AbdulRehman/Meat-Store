
import React from "react"
import { motion } from "framer-motion"

const LoadingSpinner = ({ size = 80, text = "Loading products..." }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <motion.div
        className="border-8 border-gray-300 border-t-red-600 rounded-full shadow-lg"
        style={{ width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {text && (
        <motion.p
          className="mt-6 text-red-600 font-semibold text-lg tracking-wide"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

export default LoadingSpinner


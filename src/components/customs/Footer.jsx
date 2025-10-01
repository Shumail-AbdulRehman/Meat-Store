import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">
            <span className="text-red-500">Madina</span> Meats
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Fresh & Halal meat delivered to your doorstep — trusted by families
            every day.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Our Categories
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-red-500 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-red-500 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-red-500" /> +966-123-456-789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-red-500" /> support@madinameats.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-red-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Madina Meats. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from 'react'
import { ShoppingCart, Menu, X } from "lucide-react"
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from './Logout'

function Navbar() {
  const totalCartItems = useSelector((state) => state.cart.totalQuantity)
  const userStatus = useSelector((state) => state.auth.status);
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <header className="bg-[#C62828] shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-wide text-white">
            <span className="font-extrabold">Madina</span> Meats
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-200 hover:text-gray-100 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-200 hover:text-gray-100 transition"
            }
          >
            Our Categories
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-200 hover:text-gray-100 transition"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-200 hover:text-gray-100 transition"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right section */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to={"/cart"}
            className="relative flex cursor-pointer items-center gap-2 px-4 py-2 bg-white text-red-600 font-semibold rounded-lg border border-gray-200 hover:bg-gray-200 transition"
          >
            <ShoppingCart size={18} />
            Cart
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-[13px] font-bold px-2 py-0.5 rounded-full">
                {totalCartItems}
              </span>
            )}
          </Link>

          {userStatus ? (
            <Logout />
          ) : (
            <Link
              to={"/login"}
              className="px-5 py-2 bg-white text-red-600 font-semibold rounded-lg border border-gray-200 hover:bg-gray-100 transition"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Menu
            onClick={() => setSideOpen(true)}
            className="h-7 w-7 text-white cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {sideOpen && (
        <div
          className="gap-4 px-6 py-6 md:hidden font-medium"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "250px",
            zIndex: 999,
            backgroundColor: "#fff",
            boxShadow: "-10px 0 10px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <X
            onClick={() => setSideOpen(false)}
            className="h-8 w-8 mb-4 cursor-pointer text-black"
          />

          <NavLink
            to="/"
            onClick={() => setSideOpen(false)}
            className={({ isActive }) =>
              `w-full py-2 px-3 rounded ${
                isActive
                  ? "bg-red-600 text-white font-semibold"
                  : "text-gray-900 hover:bg-gray-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/categories"
            onClick={() => setSideOpen(false)}
            className={({ isActive }) =>
              `w-full py-2 px-3 rounded ${
                isActive
                  ? "bg-red-600 text-white font-semibold"
                  : "text-gray-900 hover:bg-gray-100"
              }`
            }
          >
            Our Categories
          </NavLink>

          <NavLink
            to="/about-us"
            onClick={() => setSideOpen(false)}
            className={({ isActive }) =>
              `w-full py-2 px-3 rounded ${
                isActive
                  ? "bg-red-600 text-white font-semibold"
                  : "text-gray-900 hover:bg-gray-100"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact-us"
            onClick={() => setSideOpen(false)}
            className={({ isActive }) =>
              `w-full py-2 px-3 rounded ${
                isActive
                  ? "bg-red-600 text-white font-semibold"
                  : "text-gray-900 hover:bg-gray-100"
              }`
            }
          >
            Contact Us
          </NavLink>

          {/* Cart + Auth on Mobile */}
          <Link
            to={"/cart"}
            onClick={() => setSideOpen(false)}
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            <ShoppingCart size={18} />
            Cart
            {totalCartItems > 0 && (
              <span className="ml-2 bg-white text-red-600 text-sm font-bold px-2 py-0.5 rounded-full">
                {totalCartItems}
              </span>
            )}
          </Link>

          {userStatus ? (
            <div className="mt-4">
              <Logout />
            </div>
          ) : (
            <Link
              to={"/login"}
              onClick={() => setSideOpen(false)}
              className="mt-4 px-5 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import authService from "../appwrite/auth";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading,setLoading]=useState(false)
  const [message,setMessage]=useState(null)
  const onSubmit =async (data) => {
    setMessage(null)
    console.log("Signup Values:", data);
    setLoading(true)
    try {

      const createUserAccount=await authService.createAccount(data);
      console.log("user account",createUserAccount)
      setMessage("Account created Successfully");
      setLoading(false);
      reset();
      
    } catch (error) {
      setMessage("Account already exits");
      setLoading(false);
      reset();
    }


  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-tr from-red-200 via-red-100 to-white px-4">
      <div className="bg-red-500 p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <span className="text-4xl">🥩</span>
          <h2 className="text-2xl font-bold text-white mt-2">
            Create an Account
          </h2>
          <p className="text-red-200 text-sm mt-1">
            Join Madina Meats and start your journey
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <div className="flex items-center bg-red-950 rounded-lg px-3 py-2">
              <input
                type="text"
                spellCheck="false"
                placeholder="Username"
                className="w-full bg-transparent outline-none text-white placeholder-red-300"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                })}
              />
            </div>
            {errors.username && (
              <p className="text-red-400 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center bg-red-950 rounded-lg px-3 py-2">
              <input
                type="email"
                spellCheck="false"
                placeholder="Email address"
                className="w-full bg-transparent outline-none text-white placeholder-red-300"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center bg-red-950 rounded-lg px-3 py-2">
              {/* <Lock className="text-red-300 w-5 h-5 mr-2" /> */}
              <input
                type="password"
                spellCheck="false"
                placeholder="Password"
                className="w-full bg-transparent outline-none text-white placeholder-red-300"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {message &&(
            <p className="w-full h-auto text-orange-400 pl-4">{message}</p>
          )}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-red-950 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
          >
            <UserPlus size={18} />
            Sign Up
          </button>
        </form>

        <p className="text-white text-md text-center mt-6">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-red-200 underline cursor-pointer"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

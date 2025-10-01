import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/customs/LoadingSpinner"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login(userData));
      }
    } catch (err) {
      console.log("No logged in user");
    }
  };

  fetchUser();
}, []);

 const loginWithGoogle = async () => {
  try {
    console.log("Starting Google OAuth...");
    setLoading(true);
    await authService.createAccountWithGoogle();
    console.log("OAuth redirect should happen now");
  } catch (error) {
    console.error("Google login error:", error);
    setMessage("Failed to sign in with Google");
    setLoading(false);
  }
};
  const onSubmit = async (data) => {
    setMessage(null);
    setLoading(true);

    try {
      const userLogin = await authService.login(data);
      console.log("login user", userLogin);

      if (userLogin) {
        dispatch(login(userLogin)); 
        navigate("/"); 
      }
    } catch (error) {
      console.error(error);
      setMessage(" Invalid Email or Password");
    } finally {
      setLoading(false);
      reset();
    }
  };

  if(loading)
  {
    return(
      <LoadingSpinner/>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-tr from-red-200 via-red-100 to-white px-4">
      <div className="bg-red-500 p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <span className="text-4xl">🥩</span>
          <h2 className="text-2xl font-bold text-white mt-2">
            Sign in to Red Dunes
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <div className="flex items-center bg-red-950 rounded-lg px-3 py-2">
              <input
                type="email"
                placeholder="Email address"
                spellCheck="false"
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
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center bg-red-950 rounded-lg px-3 py-2">
              <input
                type="password"
                spellCheck="false"
                placeholder="Password"
                className="w-full bg-transparent outline-none text-white "
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

          {message && (
  <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md mt-2 animate-shake">
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <span className="font-medium">{message}</span>
  </div>
)}


          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-red-950 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
          >
            <LogIn size={18} />
            {loading ? "Signing In..." : "Sign In"}
          </button>

         
        </form>

         <button

            onClick={loginWithGoogle}
            disabled={loading}
            className="w-full mt-5 flex items-center justify-center gap-2 bg-red-950 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
          >
            <LogIn size={18} />
            {loading ? "Signing In..." : "Continue With Google"}
          </button>

        <p className="text-white text-md text-center mt-6">
          Don't have an account{" "}
          <Link
            to={"/signup"}
            className="text-black underline cursor-pointer"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
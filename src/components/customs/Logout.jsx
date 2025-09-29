import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

function Logout() {

    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const userLogout=async()=>
    {
       try {

        setLoading(true);

        const userLoggedOut=await authService.logOut();

        dispatch(logout());
        setLoading(false);
        navigate("/login");

       } catch (error) {
            console.log("eror while logout",error);
            setLoading(false);
       }
    }

    if(loading)
    {
        return(
            <LoadingSpinner/>
        )
    }

  return (
    <button onClick={userLogout}  className="px-5 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-600 transition">
            LogOut 
    </button>
  )
}

export default Logout

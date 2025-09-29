import { useEffect, useState } from 'react'
import Navbar from './components/customs/Navbar'
import './App.css'
import { useDispatch } from 'react-redux'
import Store from './Pages/Store'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import { Outlet } from 'react-router-dom'
import LoadingSpinner from './components/customs/LoadingSpinner'
import authService from './appwrite/auth' 
import { login,logout } from './store/authSlice'

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>
  {
    authService.getCurrentUser()
    .then((userData)=>
    {
      if(userData)
      {
        dispatch(login(userData))
      }
      else
      {
        dispatch(logout())
      }
    })
    .finally(()=>
    {
      setLoading(false)
    })  
  },[])
  return loading? <LoadingSpinner text='Loading...'/>: <div>
    <Navbar/>
    <Outlet/>

  </div>

  // return(
  //   <div>
  //     <Navbar/>
  //     {/* <Store/> */}
  //     {/* <AboutUs/> */}
  //     {/* <ContactUs/> */}
  //     <Outlet/>
  //   </div>
  // )
}

export default App

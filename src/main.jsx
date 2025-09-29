import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ContactUs from './Pages/ContactUs.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Store from './Pages/Store.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Categories from './Pages/Categories.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",element:<Store/>
      },
      {
        path:"/login",element:<Login/>
      },
      {
        path:"/signup",element:<SignUp/>
      },
      {
        path:"/contact-us",element:<ContactUs/>
      },
      {
        path:"/about-us",element:<AboutUs/>
      },
      {
        path:"/categories",element:<Categories/>
      },
      {
        path:"/categories/:id",element:<Product/>
      },
      {
        path:"/cart",element:<Cart/>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>

      <RouterProvider router={router}/>

    </Provider>
  </StrictMode>
)

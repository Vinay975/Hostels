import React from 'react'  
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/profile/Login'
import Addurhome from './components/profile/Addurhome'
import Signup from './components/profile/Signup'
import '../src/App.css'
import { createBrowserRouter ,RouterProvider,Route} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/ownerdashboard",
      element: <><Navbar/></>
    },
    {
      path: "/Login",
      element: <><Login/></>
    },
    {
      path: "/Signin",
      element: <><Signup/></>
    },
    {
      path: "/Addyourhome",
      element: <><Addurhome/></>
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
import React from 'react'  
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/profile/Login'
import Addurhome from './components/profile/Addurhome'
import DescriblePlace from './components/addYourHome/describleplace'
import HostelRecordFormOne from './components/addYourHome/hostelrecord-1'
import HostelRecordFormTwo from './components/addYourHome/hostelrecord-2'
import FinalSubmit from './components/addYourHome/final-submit'
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
    },
    {
      path:"/describleplace",
      element:<DescriblePlace/>
    },
    {
      path:"/hostel",
      element:<HostelRecordFormOne/>
    },
    {
      path:"/hostel-details",
      element:<HostelRecordFormTwo/>
    },
    {
      path:"/final-submit",
      element:<FinalSubmit/>
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
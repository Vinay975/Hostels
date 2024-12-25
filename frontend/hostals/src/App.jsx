import React from 'react'  
import Navbar from './components/Navbar'
import Home from './components/Home'
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

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
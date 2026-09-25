import React, { useEffect } from "react"
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Homepage from "./pages/homepage/Homepage"
import Contact from "./pages/contact/Contact"
import Projets from "./pages/projets/Projets"
import SingleProject from "./pages/singleProject/SingleProject"
import {Toaster} from "sonner"

function App () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Homepage/> 
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/projets",
          element: <Projets/>
        },
        {
          path: "/projets/:id",
          element: <SingleProject/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right"/>
    </>
  )
    
}


export default App
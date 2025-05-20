import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Homepage from "./pages/homepage/Homepage"
import Contact from "./pages/contact/Contact"
import Projets from "./pages/projets/Projets"

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
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
    
}

export default App
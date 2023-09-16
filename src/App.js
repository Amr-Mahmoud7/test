import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'

export default function App() {
  let routes=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      
    {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>}
    ]}
  ])
  return (
      <RouterProvider router={routes} />
  )
}


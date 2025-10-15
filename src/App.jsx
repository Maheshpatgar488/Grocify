import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Fruits from './components/Fruits'
import Dairy from './components/Dairy'
import Seafood from './components/Seafood'
import Allproducts from './components/allproducts'
import Layout from './components/Layout'
import NotFound from './components/Notfound'
import About from './components/About'
import Process from './components/process'
import Contact from './components/Contact'
import Cart from './components/Cart'
import { CartProvider } from './components/CartContext' // ✅ import provider
import SearchResults from './components/SearchResults'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/fruits', element: <Fruits /> },
        { path: '/dairy', element: <Dairy /> },
        { path: '/seafood', element: <Seafood /> },
        { path: '/allproducts', element: <Allproducts /> },
        { path: '/about', element: <About /> },
        { path: '/cart', element: <Cart /> },
        { path: '/search', element: <SearchResults /> },
        { path: '/process', element: <Process /> },
        { path: '/contact', element: <Contact /> },
        
        { path: '*', element: <NotFound /> },
      ]
    },
  ])

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App

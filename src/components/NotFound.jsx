import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-zinc-50">
      <h1 className="text-7xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-gray-600 text-lg mb-8">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound

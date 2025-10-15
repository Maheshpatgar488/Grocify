import React from 'react'
import Grocery from '../assets/images/grocery.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-10 mt-10 flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-20 h-[88vh]">

        {/* Hero Content */}
        <div className="flex-1 text-center lg:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl mt-18 lg:text-7xl font-bold leading-tight">
            Fresh Groceries <span className="text-orange-500">Delivered</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-lg">
            Get your daily essentials delivered right to your doorstep with just a click.
          </p>
          {/* <Link to="/allproducts"><Button className="mt-16 md:mt-20" content="Shop Now" /></Link> */}
        </div>


        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Grocery}
            className="w-full max-w-md lg:max-w-lg"
            alt="Fresh grocery delivery"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

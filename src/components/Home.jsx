import React from 'react'

import Navbar from './navbar'
import Hero from './Hero'
import Category from './category'
import Values from './values'
import Products from './products'
import Discount from './discount'
import Process from './process'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Fruits from './Fruits'
import Dairy from './Dairy'
import Seafood from './Seafood'
import About from './About'
import Cart from './Cart'


const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            {/* <About /> */}
            <Category />
            <Values />
            <Products />
            
            <Discount />
            {/* <Cart /> */}
            {/* <Process /> */}
            <Testimonials />
            {/* <Fruits /> */}
            {/* <Dairy /> */}
            {/* <Seafood /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default Home

import React from 'react'
import Hero from './Hero'
import Category from './category'
import Values from './values'
import Products from './products'
import Discount from './discount'
import Testimonials from './Testimonials'



const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Values />
            <Products />
            <Discount />
            <Testimonials />
        </div>
    )
}

export default Home

import React from 'react'
import BgAll from '../assets/images/all-banner.jpg'
import CategoryPage from './CategoryPage'

const allproducts = () => {
  return (
    <div>
        <CategoryPage title="All Products" bgImage={BgAll} categories={['All']} />
    </div>
  )
}

export default allproducts

import React from 'react'
import Heading from './Heading'
import Fruitcat from '../assets/images/fruits-and-veggies.png'
import Seafoodcat from '../assets/images/meat-and-seafood.png'
import Dairycat from '../assets/images/dairy-and-eggs.png'
import Button from './Button'
import { Link } from 'react-router-dom'




const Category = () => {

    const renderCard = category.map((card, index) => {
        return (
            <div key={card.id || index} className='flex-1 flex flex-col   md:flex-col basis-[300px]  items-center gap-6 bg-white p-5 rounded-xl shadow-lg transition-all duration-300 cursor-pointer'>
                <div className='w-full min-h-[30vh] relative'>
                    <img src={card.image} className='absolute bottom-0 mx-auto' />
                </div>

                <div className='flex-1 bg-zinc-100 pt-10 p-8 rounded-xl flex flex-col items-center gap-5 text-center'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-5'>{card.description}</p>
                    {/* <Button content="See All" /> */}
                    <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white 
    px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 mt-10 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    })


    return (
        <section className="py-20 mt-20 md:mt-0">
            <div className='max-w-[1400px] mx-auto px-5 py-20 '>
                <Heading highlight="Shop" heading="By Category" />

                {/* category cards */}
                <div className='flex flex-col  md:flex-row gap-10  md:mt-10'>
                    {renderCard}
                </div>
            </div>
        </section>
    )
}

export default Category


const category = [
    {
        id: 1,
        title: "Fruits & Veggies",
        description: "Buy fruits and veggies for yur better health",
        image: Fruitcat,
        path: '/fruits',
    },
    {
        id: 3,
        title: "Meat & Sea Food",
        description: "Buy fruits and veggies for yur better health",
        image: Seafoodcat,
        path: '/seafood',
    },
    {
        id: 4,
        title: "dairy-and-eggs",
        description: "Buy fruits and veggies for yur better health",
        image: Dairycat,
        path: '/dairy',
    },


]
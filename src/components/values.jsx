import React from 'react'
import Heading from './Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../assets/images/basket-full-vegetables.png'


const values = () => {

    const leftValues = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>
                        {item.icon}
                    </span>
                </div>
                <div className='md:text-right'>
                    <h4 className='text-zinc-800 text-3xl font-bold'>{item.title}</h4>
                    <p className='text-zinc-600 mt-3 mb-5'>{item.para}</p>
                </div>
            </div>

        )
    })

    const rightValues = value.slice(2).map(item => {
        return (
            <div key={item.id} className='flex items-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>
                        {item.icon}
                    </span>
                </div>
                <div>
                    <h4 className='text-zinc-800 text-3xl font-bold'>{item.title}</h4>
                    <p className='text-zinc-600 mt-3 mb-5'>{item.para}</p>
                </div>
            </div>

        )
    })

  return (
    <section>
        <div className='max-w-[1400px] text-center mx-auto my-5 px-5'>
            <Heading highlight="Our" heading="Values"/>

            <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>
                {/* left Values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {leftValues}
                </div>
                <div className='md:flex w-1/2 hidden'>
                    <img src={Basket}/>
                </div>
                {/* Rightvalues */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {rightValues}
                </div>
            </div>
        </div>
    </section>
  )
}

export default values


const value =[
    {
        id: 1,
        key: 1,
        title: "Trust",
        para: "It is long established fact that a reader will be distracted by the readable content.",
        icon: <FaHeart />
    },
     {
        id: 2,
        key: 2,
        title: "Always Fresh",
        para: "It is long established fact that a reader will be distracted by the readable content.",
        icon: <FaLeaf />
    },
    {
        id: 3,
        key: 3,
        title: "Food Safety",
        para: "It is long established fact that a reader will be distracted by the readable content.",
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        key: 4,
        title: "100% Organic",
        para: "It is long established fact that a reader will be distracted by the readable content.",
        icon: <FaSeedling />
    },

]
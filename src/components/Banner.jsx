import React from 'react'

const Banner = ({title,bgImage}) => {
  return (
    <div className='bg-zinc-400 h-[50vh] mt-24 flex justify-center items-center' style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <h2 className='text-5xl text-zinc-800 bg-white font-bold p-5 rounded-xl'>{title}</h2>
    </div>
  )
}

export default Banner

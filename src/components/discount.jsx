import React from 'react'
import Button from './Button'
import Fruitsbg from '../assets/images/fruits-banner.jpg'

const discount = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat mt-20"
            style={{ backgroundImage: `url(${Fruitsbg})` }}
        >
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-white/60"></div>
            {/* Change bg-white/60 → bg-black/40 or bg-orange-500/30 as needed */}

            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-center max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
                <span className="text-6xl sm:text-8xl md:text-9xl text-orange-500 font-bold transform md:-rotate-90 h-fit self-center mb-6 md:mb-0">
                    20%
                </span>

                <div className="max-w-[700px] text-center md:text-left text-zinc-800">
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                        First Order Discount!
                    </h3>
                    <p className="my-6 text-sm sm:text-base leading-relaxed">
                        Enjoy your first shopping experience with us! 🎉
                        Get <span className="text-orange-500 font-semibold">20% OFF</span> on your first order —
                        because your fresh start deserves fresh savings.
                        Use code <span className="font-bold">WELCOME20</span> at checkout and make
                        your cart a little happier today!
                    </p>
                    <Button content="Get a Discount" />
                </div>
            </div>
        </section>


    )
}

export default discount

import React from 'react'
import Heading from './Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

// Local images
import Customer1 from '../assets/images/testimonialman2.jpg'
import Customer2 from '../assets/images/customer2.jpg'
import Customer3 from '../assets/images/customer3.jpg'
import Customer4 from '../assets/images/customer4.jpg'
import Customer5 from '../assets/images/customer5.jpg'
import Customer6 from '../assets/images/customer6.jpg'
import Customer7 from '../assets/images/customer7.jpg'

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Aarav Mehta",
            profession: "Frontend Developer",
            image: Customer1,
            message:
                "The team was incredible! They delivered a fast, responsive, and visually stunning website that perfectly fits our brand vision.",
            rating: 5,
        },
        {
            id: 2,
            name: "Priya Sharma",
            profession: "Product Manager",
            image: Customer3,
            message:
                "Excellent experience from start to finish. The communication was smooth, and the final product exceeded our expectations.",
            rating: 4.5,
        },
        {
            id: 3,
            name: "Rohit Verma",
            profession: "UI/UX Designer",
            image: Customer2,
            message:
                "I was impressed with their attention to detail and creative approach. The design feels both elegant and functional.",
            rating: 4,
        },
        {
            id: 4,
            name: "Sneha Kapoor",
            profession: "Entrepreneur",
            image: Customer5,
            message:
                "They truly understood our business needs and transformed them into a sleek, user-friendly website. Highly recommended!",
            rating: 5,
        },
        {
            id: 5,
            name: "Vikram Singh",
            profession: "Marketing Head",
            image: Customer4,
            message:
                "Professional, reliable, and highly skilled. Their web solutions helped us increase customer engagement significantly.",
            rating: 4.5,
        },
        {
            id: 6,
            name: "Ananya Rao",
            profession: "Software Engineer",
            image: Customer6,
            message:
                "Working with the team was a seamless experience. They quickly understood our technical requirements and delivered a robust, scalable solution on time.",
            rating: 5,
        },
        {
            id: 7,
            name: "Karan Patel",
            profession: "Startup Founder",
            image: Customer7,
            message:
                "Their professionalism and creativity stood out. The website they built has significantly improved our brand visibility and user engagement.",
            rating: 4.5,
        },
    ]

    const renderStars = (rating) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-orange-500" />)
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-orange-500" />)
            } else {
                stars.push(<FaRegStar key={i} className="text-orange-300" />)
            }
        }
        return stars
    }

    return (
        <section className="overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-20 text-center">
                <Heading highlight="Our" heading="Testimonials" />

                {/* Navigation Buttons */}
                <div className="flex justify-end py-5 gap-x-3">
                    <button className="text-2xl text-zinc-800 rounded-lg w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-red-400 hover:to-orange-500 hover:text-white cursor-pointer swiper-button-prev">
                        <IoIosArrowBack />
                    </button>
                    <button className="text-2xl text-zinc-800 rounded-lg w-10 h-10 sm:w-11 sm:h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-red-400 hover:to-orange-500 hover:text-white cursor-pointer swiper-button-next">
                        <IoIosArrowForward />
                    </button>
                </div>

                {/* Swiper Section */}
                <Swiper
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={false}
                    className="!px-2 sm:!px-4 md:!px-6 lg:!px-8"
                    breakpoints={{
                        640: { slidesPerView: 1.1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} className="flex justify-center">
                            <div className="bg-zinc-100 rounded-xl p-6 sm:p-8 text-left shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between w-full max-w-[400px]">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-x-5 text-center sm:text-left">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-orange-400 mb-4 sm:mb-0"
                                    />
                                    <div>
                                        <h5 className="text-lg sm:text-xl font-bold">{review.name}</h5>
                                        <p className="text-zinc-600 text-sm sm:text-base">{review.profession}</p>
                                        <div className="flex justify-center sm:justify-start mt-1">
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-zinc-600 mt-5 min-h-[15vh] text-sm sm:text-base leading-relaxed text-justify">
                                    "{review.message}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials

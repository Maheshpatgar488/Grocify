import React from 'react'

import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <footer className="bg-zinc-100  py-20 mt-20">
                <div className='flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10 md:px-20  md:text-left'>
                    <div className='flex-1 basis-[300px]'>
                        <a href="#" className='text-3xl font-bold'>
                            Gr<span className='text-orange-500 uppercase'>o</span>cify
                        </a>

                        <p className='text-zinc-600 mt-4 md:mt-6 max-w-[350px] text-justify'>
                            Bred for a higher standard of grocery delivery. We bring the freshest produce and essentials right to your doorstep.
                        </p>

                        <p className='text-zinc-800 mt-6'>
                            2025 &copy; Grocify. All Rights Reserved.
                        </p>
                    </div>

                    <ul className='flex-1'>
                        <li>
                            <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                        </li>
                        <li className='mt-6'>
                            <Link to="/about" className='text-zinc-800 hover:text-orange-500 '>About</Link>
                        </li>
                        <li className='mt-6'>
                            <a href="#" className='text-zinc-800 hover:text-orange-500 '>FAQ</a>
                        </li>
                    </ul>

                    <ul className='flex-1'>
                        <li>
                            <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                        </li>
                        <li className='mt-6'>
                            <a href="#" className='text-zinc-800 hover:text-orange-500 '>Support Center</a>
                        </li>
                        <li className='mt-6'>
                            <a href="#" className='text-zinc-800 hover:text-orange-500 '>Feedback</a>
                        </li>
                        <li className='mt-6'>
                            <Link to="/contact" className='text-zinc-800 hover:text-orange-500 '>Contact Us</Link>
                        </li>
                    </ul>

                    <div className='flex-1'>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                        <p className='text-zinc-600 mt-6'>Questions or Feedbacks?<br />We'd love to hear from you!</p>
                        <div className='flex bg-white p-1 rounded-lg mt-6'>
                            <input className='h-[5vh] pl-4 flex-1 focus:outline-none' type="email" name="email" id="email" autoComplete='off' placeholder='Email Us' />
                            <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>


                </div>
            </footer>
        </section>
    )
}

export default Footer

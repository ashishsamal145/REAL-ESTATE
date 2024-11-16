import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=' container mx-auto py-4  lg:px-32 my-20 w-full overflow-hidden' id='Testimonials'>
            <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-center'>Customer <span className=' underline underline-offset-4 decoration-1  under font-light'>Testimonials</span></h1>
            <p className='text-gray-500 max-w-80  mb-8 text-center mx-auto'>Real Stories from Those Who Found Home with Us</p>
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    testimonialsData.map((testimonial, index) => (
                        <div className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center' key={index}>
                            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                            <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                            <div className='flex justify-center gap-2 text-red-500 mb-4'>
                                {Array.from({ length: testimonial.rating }, (item, index) => (
                                    <img key={index} src={assets.star_icon} alt="" />
                                ))}
                            </div>
                            <p className='text-gray-600'>{testimonial.text}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Testimonials

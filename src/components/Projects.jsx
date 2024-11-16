import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardToShow] = useState(1)

    useEffect(() => {
        const updateCrdasToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardToShow(projectsData.length)
            } else {
                setCardToShow(1)
            }
        };
        updateCrdasToShow();

        window.addEventListener('resize',updateCrdasToShow);
        return ()=>window.removeEventListener('resize',updateCrdasToShow);
    }, [])


    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }


    return (
        <div className=' container mx-auto py-4 pt-20 p-14 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ' id='Projects'>
            <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-center'>Projects <span className=' underline underline-offset-4 decoration-1  under font-light'>Completed</span></h1>
            <p className='text-gray-500 max-w-80  mb-8 text-center mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

            {/* ---- Slider buttons --------------- */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* --------------------Projects slider container =------------------ */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 120) / cardsToShow}%)` }}>
                    {
                        projectsData.map((projects, index) => (
                            <div className='relative flex-shrink-0 w-ful sm:w-1/4' key={index}>
                                <img src={projects.image} alt={projects.title} className='w-full h-auto mb-14' />
                                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                        <h2 className='txt-xl font-semibold text-gray-800'>
                                            {projects.title}
                                        </h2>
                                        <p className='text-gray-500 text-sm'>
                                            {projects.price} <span className='px-1'> | </span> {projects.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects

import React from 'react'

const NutritionCarousalCard = ({ image, title }) => {
    return (
        <>
            <div className='h-full'>
                <div className='rounded-md h-full px-3 my-2 md:w-auto m-auto'>
                    <img src={image} alt={title} className='w-full object-cover rounded-t-md' />
                    <h3 className='text-sm my-1 text-center md:text-xl mt-3'>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default NutritionCarousalCard
import React from 'react';

import { IoMdArrowDropright } from 'react-icons/io'

const PictureCarousalCard = (props) => {
    return (
        <>
            <div className='w-full h-72 lg:h-80 relative px-2 overflow-hidden'>
                <div className='w-full h-full relative'>
                    <img src={props.image} alt={props.title} className='w-full h-full object-cover object-center transition duration-700 ease-in-out rounded-lg' />
                    <div
                        className='w-full h-full absolute inset-0 rounded-lg'
                        style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.0)80%)" }}
                    />
                </div>
                <div className='absolute w-full left-6 bottom-3 text-white'>
                    <h4 className='z-10 truncate overflow-hidden'>{props.title}</h4>
                    <h6 className='z-10 flex items-center'>{props.places} <IoMdArrowDropright /></h6>
                </div>
            </div>
        </>
    )
}

export default PictureCarousalCard
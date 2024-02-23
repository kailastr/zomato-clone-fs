import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import { AiOutlinePlus } from 'react-icons/ai'

const FoodItem = (props) => {

    const [food, setFood] = useState({});

    return (
        <>
            <div className='flex items-start gap-2'>
                {props?.name && (
                    <div className='flex items-start gap-4 w-full p-1'>
                        {props?.image && (
                            <div className='h-24 w-1/3 md:h-24 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden'>
                                <img src={props?.image} alt="Food Item" className='w-full h-full object-cover object-center' />
                            </div>
                        )}
                        <div className='w-3/4 md:w-7/12 flex flex-col gap-1'>
                            <div className='flex items-start justify-between'>
                                <h3 className='text-xl font-semibold'>
                                    {props?.name}
                                </h3>
                            </div>
                            <ReactStars count={5} edit={false} value={props.rating} isHalf={true} />
                            <h5 className='text-gray-500'>₹ {props.price}</h5>
                            <p className='text-gray-500'>{props.description}</p>
                            <button className='md:hidden flex justify-center items-center gap-2 text-zomato-400 bg-zomato-50 border-zomato-400 px-2 py-1 rounded-lg'>
                                <AiOutlinePlus /> Add
                            </button>
                        </div>
                        <div className='hidden md:block w-2/12'>
                            <button className='flex items-center gap-2 text-zomato-400 bg-zomato-50 hover:bg-zomato-100 transition duration-200 ease-in-out border-zomato-400 px-2 py-1 rounded-lg'>
                                <AiOutlinePlus /> Add
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default FoodItem
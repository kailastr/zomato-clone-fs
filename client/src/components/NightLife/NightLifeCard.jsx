import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai';


const NightLifeCard = (props) => {

    const [image, setImage] = useState({
        images: [
            {
                location: "https://b.zmtcdn.com/data/pictures/6/20790436/6c1731ad883c30e77cf0aa1d58157ec2_featured_v2.jpg"
            },
        ]
    })
    return (
        <Link to={`/restaurant/${props._id}/overview`} >
            <div className='bg-white p-4 mb-4 w-full rounded-2xl transition duration-700 ease-in-out sm:drop-shadow-md md:drop-shadow-none lg:shadow-none hover:drop-shadow-lg'>
                <div className='w-full relative'>
                    <div className='w-full bottom-4 flex items-end justify-between'>
                        <div className='flex flex-col gap-2 items-start absolute'>
                            {props.isPro && (
                                <span className='bg-black text-yellow-200 px-1 rounded text-sm'>
                                    Pro extra 10% off
                                </span>
                            )}
                            {props.isOff && (
                                <span className='bg-zomato-400 text-white px-1 rounded text-sm'>
                                    $250 Off
                                </span>
                            )}
                        </div>
                        <img src={image.images.length && image.images[0].location} alt="Night Life" className='w-full h-full rounded-2xl' />
                    </div>
                    <div className='my-2 flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-xl font-medium'>{props.name}</h4>
                            <span className='bg-green-800 text-white text-sm px-2 rounded flex items-center gap-2'>
                                {props.restaurantReviewValue} <AiTwotoneStar />
                            </span>
                        </div>
                        <div className='flex items-center justify-between text-gray-500 gap-2'>
                            <p className='truncate w-3/5'>{props.cuisine.join(", ")}</p>
                            <p className='2/5'>₹ {props.averageCost} for one</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NightLifeCard
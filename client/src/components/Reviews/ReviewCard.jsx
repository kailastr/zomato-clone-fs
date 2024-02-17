import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TiStarFullOutline } from 'react-icons/ti';

//to compare the time from the current time
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ReviewCard = (props) => {

    const [user, setUser] = useState("Kailas");

    return (
        <div className='my-3 flex flex-col gap-3 border-b pb-5 border-gray-300'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full'>
                        <img
                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                            alt="Avatar"
                            className='w-full h-full rounded-full object-cover'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold'>{user}</h3>
                        <small className='text-gray-500'>
                            5 reviews &#8226; 3 followers
                        </small>
                    </div>
                </div>
                <button className='text-zomato-400 border border-zomato-400 rounded-lg px-4'>Follow</button>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-3'>
                    <span className='text-white text-xs bg-green-700 gap-2 px-2 py-1 rounded-lg flex items-center'>
                        {props.rating} <TiStarFullOutline />
                    </span>
                    <h5 className='font-regular uppercase text-green-700'>
                        {props.isRestaurantReview ? "Dining" : "Delivery"}
                    </h5>
                    <small className='text-gray-500'>
                        {dayjs(props.createdAt).fromNow()}
                    </small>
                </div>
                <div className='w-full'>
                    <p className='w-full text-gray-600 font-light text-base'>
                        {props.reviewText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
import React, { useState } from 'react'

import NightLifeCarousal from './NightLifeCarousal';
import NightLifeCard from './NightLifeCard';

const NightLife = () => {

    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123hdsfjh987Kkjhd",
            isPro: true,
            isOff: true,
            name: "Mehfil Biriyani",
            restaurantReviewValue: "4.1",
            cuisine: ["Biryani", "Kerala", "South Indian", "Arabian", "Shake", "Juices"],
            averageCost: "150"
        },
        {
            _id: "123hdsfjh9dfg87Kkjhd",
            isPro: true,
            isOff: false,
            name: "Hotel Al - Reem",
            restaurantReviewValue: "4.3",
            cuisine: ["Arabian", "Mandi"],
            averageCost: "150"
        },
        {
            _id: "123hdsfjh98fgh7Kkjhd",
            isPro: false,
            isOff: true,
            name: "KFC",
            restaurantReviewValue: "4.1",
            cuisine: ["Burger", "Fast Food", "Desserts", "Beverages"],
            averageCost: "150"
        },
        {
            _id: "123hdsfjh98fgh7Kkjhd",
            isPro: false,
            isOff: true,
            name: "KFC",
            restaurantReviewValue: "4.1",
            cuisine: ["Burger", "Fast Food", "Desserts", "Beverages"],
            averageCost: "150"
        }
    ]);


    return (
        <div className='mb-10'>
            <div className='w-full mt-10 mb-10 rounded-xl'>
                <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="Premium Offer" />
            </div>
            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>NightLife in Kochi</h1>
            <NightLifeCarousal />


            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>Nightlife Restaurants in Kochi</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {restaurantList.map((restaurant) => (
                    <NightLifeCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </div>
    )
}

export default NightLife
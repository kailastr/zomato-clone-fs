import React, { useState } from 'react';

//components import
import DeliveryCarousel from './DeliveryCarousel';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {

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
        }
    ]);

    return (
        <>
            <DeliveryCarousel />
            <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
                Delivery Restaurants in Kochi
            </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant} key={restaurant._id} />
                    ))
                }
            </div>
        </>
    )
}

export default Delivery
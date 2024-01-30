import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//import component
import PictureCarousalCard from '../PictureCarousalCard';

const DiningCarousal = () => {

    const [Dining] = useState([
        {
            image: "https://b.zmtcdn.com/data/collections/34aa4d41b764989b6b832e633b1bb67c_1676575122.jpg",
            title: "6 places for Authentic Kuzhimandhi",
            places: "5 Places"
        },
        {
            image: "https://b.zmtcdn.com/data/collections/152db51b5df3bdeef85648532db4236e_1681538674.png",
            title: "8 places for Art Lovers",
            places: "8 Places"
        },
        {
            image: "https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1676552471.jpg",
            title: "14 Great Cafes",
            places: "14 Places"
        },
        {
            image: "https://b.zmtcdn.com/data/collections/e001bf04df21d6d29048e8507a1fab80_1676556811.jpg",
            title: "7 Luxury Places",
            places: "5 Places"
        },
        {
            image: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120498.jpg",
            title: "5 Must visit Legendary Places",
            places: "5 Places"
        },
        {
            image: "https://b.zmtcdn.com/data/collections/cb441382af822ed30451d127d4a9eb76_1676614037.jpg",
            title: "12 places for North Indian Treats",
            places: "12 Places"
        },
        {
            image: "https://b.zmtcdn.com/data/collections/bfbe3bee001937d10d76a568c8900a15_1676552659.jpg",
            title: "5 Superb seafood places",
            places: "5 Places"
        },
        {
            image: "https://b.zmtcdn.com/data/collections/3261812472acbb9f1e7e0d3bc6a1b2b6_1676574441.jpg",
            title: "5 Places for authentic Kerala Food",
            places: "5"
        }
    ]);

    const sliderConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },

        },
        modules: [Navigation],
        navigation: true,
        className: "diningSwiper"
    }

    return (
        <>
            <div className='w-full'>
                <Swiper {...sliderConfig}>
                    {Dining.map((item, index) => (
                        <SwiperSlide key={index}>
                            <PictureCarousalCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default DiningCarousal
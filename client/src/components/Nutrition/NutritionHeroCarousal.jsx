import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const NutritionHeroCarousal = () => {

    const [heroBanner, setHeroBanner] = useState([
        "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
        "https://cdn2.f-cdn.com/contestentries/258577/14016951/55bdb28e2a113_thumb900.jpg",
        "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
        "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
        "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png",
    ]);

    const CarousalConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
        },
        modules: [Navigation],
        navigation: true,
        className: "mySwiper"
    };

    return (
        <Swiper {...CarousalConfig} className='w-full h-72'>
            {heroBanner.map((image, index) => (
                <SwiperSlide key={index} className='w-full h-64' >
                    <img src={image} alt="Nutrition Banner"
                        className='w-full h-full object-center rounded-lg'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default NutritionHeroCarousal
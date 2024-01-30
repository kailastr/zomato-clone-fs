import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import DeliveryCategoryCard from './DeliveryCategoryCard';

const DeliveryCarousel = () => {

    //images and names for the carousel cards
    const categories = [
        {
            image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            title: "Biriyani"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title: "Pizza"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            title: "Burger"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            title: "Chicken"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            title: "Sandwich"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
            title: "North Indian"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
            title: "Dosa"
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
            title: "Momos"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
            title: "Noodles"
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title: "Rolls"
        },
    ];

    const sliderConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },

        },
        modules: [Navigation],
        navigation: true,
        className: "mySwiper"
    }

    return (
        <>
            <h1 className='text-xl mt-4 mb-5 md:mt-8 md:text-3xl md:font-semibold'>
                Insipiration for your first order
            </h1>
            <div className='lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center '>
                {categories.map((food, index) => (
                    <DeliveryCategoryCard key={index} {...food} />
                ))}
            </div>
            <div className='hidden lg:block'>
                <Swiper {...sliderConfig}>
                    {categories.map((food, index) => (
                        <SwiperSlide  key={index}>
                            <DeliveryCategoryCard {...food} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default DeliveryCarousel
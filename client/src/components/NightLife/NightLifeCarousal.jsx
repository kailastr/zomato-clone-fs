import React, { useState } from 'react';

//import carousal
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import PictureCarousalCard from '../PictureCarousalCard';

const NightLifeCarousal = () => {

    const [NightLife] = useState([
        {
            image: "https://b.zmtcdn.com/data/pictures/5/900055/4cab7b413b859e994bfd7f12fcd365b1_featured_v2.jpg",
            title: "Seagull",
            places: "6 places",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/9/900639/4bafaa0a021b8074f4cbef63527b3cde_featured_v2.jpg",
            title: "Sky Grill Lounge Bar",
            places: "3 places",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/6/20790436/6c1731ad883c30e77cf0aa1d58157ec2_featured_v2.jpg",
            title: "Watson's Kochi",
            places: "9 places",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/4/95434/a362f222be8d32ece041590e30f7c1f9_featured_v2.jpg",
            title: "Ava Lounge & Bar",
            places: "7 Places",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/5/95425/9d3a0c8962281189ca4a5a7845f84455_featured_v2.jpg",
            title: "ConneXions Bar",
            places: "6 places",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/3/902233/24129cd24d3e3dbdec6fa18ee69c6f1d_featured_v2.jpg",
            title: "Mercey Rooftop Restaurants",
            places: "4 Places",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/1/19610081/d62d221a5598d7d11086425618377f3c_featured_v2.jpg",
            title: "Juction The Bar",
            places: "2 Places",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/8/19460468/ce17461a4cf751f96559d89687d81782_featured_v2.jpg",
            title: "Leisure Inn Kochi",
            places: "11 Places",
        },
    ]);

    const sliderConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            780: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            }
        },
        modules: [Navigation],
        navigation: true,
        className: "diningSwiper"
    };

    return (
        <>
            <div className='w-full'>
                <Swiper {...sliderConfig} >
                    {NightLife.map((each, index) => (
                        <SwiperSlide key={index} >
                            <PictureCarousalCard {...each} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default NightLifeCarousal
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import ReactStars from 'react-rating-stars-component';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// components
import MenuCollection from './MenuCollection';
import MenuSimiliarRestaurant from './MenuSimiliarRestaurant';
import ReviewCard from '../Reviews/ReviewCard';
import MapView from './MapView';

// redux
import { useSelector } from 'react-redux';

const Overview = () => {

  const { id } = useParams();

  // const restaurant = useSelector()
  const restaurant = {
    _id: "",
    isPro: true,
    isOff: true,
    name: "",
    restaurantReviewValue: "",
    cuisine: [],
    averageCost: "150"
  };

  const reduxState = useSelector((globalState) => globalState.restaurant.selectedSpecificRestaurant);
  console.log("Global State", reduxState);

  const [reviews, setReviews] = useState([
    {
      rating: 3.9,
      isRestaurantReview: true,
      createdAt: "Sat Feb 17 2024 17:00:55 GMT+0530 (India Standard Time)",
      reviewText: "Worth for money and great service"
    },
    {
      rating: 4,
      isRestaurantReview: false,
      createdAt: "Sat Feb 15 2024 17:00:55 GMT+0530 (India Standard Time)",
      reviewText: "Tasty food and friendly service"
    }
  ]);

  const [MenuImages, setMenuImages] = useState([
    "https://b.zmtcdn.com/data/menus/089/95089/6191c39a52e8970e043d81c5d2b36986.jpg",
    "https://b.zmtcdn.com/data/menus/089/95089/cc4d8bcc6de9d03de94f447ea85352eb.jpg",
    "https://b.zmtcdn.com/data/menus/089/95089/2e06ae13ecad8d22daebb8b45a73595e.jpg",
    "https://b.zmtcdn.com/data/menus/089/95089/1fca61d137d1f89e7a7c21219cc73282.jpg",
    "https://b.zmtcdn.com/data/menus/089/95089/ff795044432f67eb87965069ff3d18ae.jpg"

  ]);

  const sliderConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      780: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0
      }
    },
    modules: [Navigation],
    navigation: true,
    className: "diningSwiper"
  };

  //to convert the map latitude and longitude from string to floar variables
  const getMapLatLong = (mapAddress) => {
    return mapAddress?.split(',').map((item) => parseFloat(item));
  }

  return (
    <>
      <div className='flex flex-col gap-5 md:flex-row relative'>
        <div className='w-full md:w-8/12'>
          <h2 className='font-semibold text-lg md:text-xl my-4'>
            About this place
          </h2>

          <div className='flex justify-between items-center'>
            <h4 className='text-lg font-medium'>Menu</h4>
            <Link to={`/restaurant/${id}/menu`} >
              <span className='flex item-center gap-2 text-zomato-400 '>
                See all Menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>

          <div className='flex flex-wrap gap-3 my-4'>
            <MenuCollection menuTitle='Menu' pages={MenuImages.length} images={MenuImages} />
          </div>

          <h4 className='text-lg font-medium my-4'>Cuisine</h4>
          <div className='flex flex-wrap gap-2'>
            {restaurant?.cuisine?.map((cuisineName, index) => (
              <span key={index} className='border border-gray-600 text-yellow-600 px-3 mx-1 py-1 rounded-full hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer'>
                {cuisineName}
              </span>
            ))}
          </div>

          <div className='my-4'>
            <h4 className='text-lg font-medium'>Average Cost</h4>
            <h6>₹ {restaurant.averageCost}</h6>
            <small className='text-gray-500'>Exclusive of applicable taxes and charges, if any</small>
          </div>

          <div className='flex flex-col-reverse'>
            <div className='my-4'>
              <h4 className='text-lg font-medium'>
                Rate your delivery experiece
              </h4>
              <ReactStars count={5} onChange={(newRating) => console.log(newRating)} size={24} activeColor='#ffd700' />
              <h4 className='text-lg font-medium my-5'>
                {restaurant.name} Reviews
              </h4>
              {reviews.map((review, index) => (
                <ReviewCard {...review} key={index} />
              ))}
            </div>

            <div className='my-4'>
              <h4 className='text-lg font-medium'>Similiar Restaurants</h4>
              <div>
                <Swiper {...sliderConfig} >
                  <SwiperSlide >
                    < MenuSimiliarRestaurant image='https://b.zmtcdn.com/data/pictures/chains/4/95314/4d4117b9141372a273a7eafa997a2520_featured_v2.jpg' title='KFC' />
                  </SwiperSlide>
                  <SwiperSlide >
                    < MenuSimiliarRestaurant image='https://b.zmtcdn.com/data/pictures/chains/6/20168266/e048b9c527ce1df3a5606ae04d4cbe14_featured_v2.jpg' title='AFC' />
                  </SwiperSlide>
                  <SwiperSlide >
                    < MenuSimiliarRestaurant image='https://b.zmtcdn.com/data/pictures/9/20422239/4807ec92c2ce64c5463cc5a3a9303938_featured_v2.jpg' title='Amigo Brosted' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className='my-4 w-full md:hidden flex flex-col gap-4'>
              <MapView
                title="Al Shaba"
                phno="+913954873534"
                mapLocation={getMapLatLong("10.014439843723636, 76.30030208581452")}
                address="39/2957 B1, Stadium Link Road, Kaloor, Kochi"
              />
            </div>
          </div>
        </div>
        {/* for larger screen view the map section will be as follow */}
        <aside
          style={{ height: "fit-content" }}
          className='hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white p-4 shadow-md flex-col gap-4'
        >
          <MapView
            title="Al Shaba"
            phno="+913954873534"
            mapLocation={getMapLatLong("10.014439843723636, 76.30030208581452")}
            LatAndLong="10.014439843723636, 76.30030208581452"
            address="39/2957 B1, Stadium Link Road, Kaloor, Kochi"
          />
        </aside>
      </div>
    </>
  )
}

export default Overview;

// restaurant dummy data
// const [restaurant, setRestaurant] = useState([
//   {
//     _id: "123hdsfjh987Kkjhd",
//     isPro: true,
//     isOff: true,
//     name: "Mehfil Biriyani",
//     restaurantReviewValue: "4.1",
//     cuisine: ["Biryani", "Kerala", "South Indian", "Arabian", "Shake", "Juices"],
//     averageCost: "150"
//   },
// ]);
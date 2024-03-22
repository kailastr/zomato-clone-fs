import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import icons
import { TiStarOutline } from 'react-icons/ti'
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri'
import { BiBookmarkPlus } from 'react-icons/bi';

//components import
import Navbar from '../components/Navbar';
import ImageGrid from '../components/Restaurant/ImageGrid';
import InfoButton from '../components/Restaurant/InfoButton';
import ResturantInfo from '../components/Restaurant/ResturantInfo';
import Tabs from '../components/Restaurant/Tabs';
import CartContainer from '../components/Cart/CartContainer';

// redux
import { useDispatch } from 'react-redux';
import { getSpecificRestaurant } from '../redux/reducers/restaurant/restaurant.action';
import { getImage } from '../redux/reducers/image/image.action';

const RestaurantLayout = ({ children: Component, ...props }) => {

    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: [],
        address: "",
        restaurantRating: 4.1,
        deliveryRating: 3.2
    });

    const dispatch = useDispatch();
    const { _id } = useParams();
    useEffect(() => {
        dispatch(getSpecificRestaurant(_id)).then((data) => {
            setRestaurant((prev) => ({
                ...prev,
                ...data.payload.restaurant
            }));
            

            dispatch(getImage(data.payload?.restaurant?.photos)).then((data) => {
                setRestaurant((prev) => ({
                    ...prev,
                    images: data.payload.images
                }))
            })
        });

    }, []);

    return (
        <>
            <Navbar />
            <div className='container mx-auto px-4 mt-8 lg:px-20 pb-20'>
                <ImageGrid images={restaurant.images} />
                <ResturantInfo {...restaurant} />
                <div className='my-4 flex flex-wrap gap-3 mx-auto'>
                    <InfoButton isActive='true'>
                        <TiStarOutline />Add Review
                    </InfoButton>
                    <InfoButton >
                        <RiDirectionLine />Direction
                    </InfoButton>
                    <InfoButton>
                        <BiBookmarkPlus />Bookmark
                    </InfoButton>
                    <InfoButton>
                        <RiShareForwardLine />Share
                    </InfoButton>
                </div>

                <div className='my-10 sticky bg-white z-10 top-0 pt-2'>
                    <Tabs />
                </div>
                {Component}
            </div>
            <CartContainer />
        </>
    )
}

export default RestaurantLayout;

// dummy setRestaurant details
// images: [
//     {
//         location: "https://b.zmtcdn.com/data/pictures/3/18932783/2dd2f4c4850df432aa54e6959fa3fe8e.jpg"
//     },
//     {
//         location: "https://b.zmtcdn.com/data/pictures/3/18932783/17f7cd4c1c51946fc40defd47a5df2eb.jpg"
//     },
//     {
//         location: "https://b.zmtcdn.com/data/reviews_photos/353/9d3db683c79570f5e30050d87b43c353_1570790362.jpg"
//     },
//     {
//         location: "https://b.zmtcdn.com/data/pictures/4/18707294/5e9eb3b68de1deaf7590a17b414f017b.jpg"
//     },
//     {
//         location: "https://b.zmtcdn.com/data/pictures/7/20740447/aaebf1547278ff4852e8be706b2cb3fe_o2_featured_v2.jpg"
//     },
// ],
// name: "Hamza Non Veg Restaurant",
// cuisine: ["North Indian", "Kebab", "Biryani"],
// address: "Fort Kochi",
// restaurantRating: 4.1,
// deliveryRating: 3.2
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//import layout
import HomePageLayout from '../layouts/Homepage.layout'

//import pages
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/NightLife';
import Nutrition from '../components/Nutrition';

//redux
import { useDispatch } from 'react-redux';
import { getRestaurant } from '../redux/reducers/restaurant/restaurant.action'

const Home = () => {
    const { type } = useParams();

    const dispatch = useDispatch();

    //this funciton will help us to get all the restaurant details and could use this to get the restaurants details
    useEffect(() => {
        dispatch(getRestaurant());
    }, []);

    return (
        <div className='my-5 sm:mb-32'>
            {type === 'delivery' && <Delivery />}
            {type === 'dining' && <Dining />}
            {type === 'night' && <NightLife />}
            {type === 'nutrition' && <Nutrition />}
        </div>
    )
}

export default HomePageLayout(Home);
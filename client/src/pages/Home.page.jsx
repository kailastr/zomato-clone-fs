import React from 'react';
import { useParams } from 'react-router-dom';

//import layout
import HomePageLayout from '../layouts/Homepage.layout'

//import pages
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/NightLife';
import Nutrition from '../components/Nutrition';

const Home = () => {
    const { type } = useParams();

    return (
        <div className='my-5'>
            {type === 'delivery' && <Delivery />}
            {type === 'dining' && <Dining />}
            {type === 'night' && <NightLife />}
            {type === 'nutrition' && <Nutrition />}
        </div>
    )
}

export default HomePageLayout(Home);
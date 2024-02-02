import React from 'react';

import NutritionHeroCarousal from './NutritionHeroCarousal';
import NutritionCarousal from './NutritionCarousal';
import NutritionCard from './NutritionCard';

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal />
            <div className='my-6'>
                <NutritionCarousal />
            </div>
            <div className='flex justify-between flex-wrap'>
                <NutritionCard bg="red" image="https://www.shutterstock.com/image-vector/whey-protein-banner-template-realistic-260nw-1639529743.jpg" />
                <NutritionCard bg="red" image="https://img.freepik.com/free-vector/protein-supplements-horizontal-banner_23-2150066795.jpg" />
                <NutritionCard bg="red" image="https://img.freepik.com/free-vector/protein-supplements-banner-design_23-2150072980.jpg" />
            </div>
        </div>
    )
}

export default Nutrition
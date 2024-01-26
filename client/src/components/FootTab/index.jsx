import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoFastFoodOutline, IoNutritionOutline } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import classnames from 'classnames';

//Mobile view
const MobileTabs = () => {

    //To track on which Tab we are on, we should have to highlight its section. For that we could use useState
    const [allTypes] = useState([
        {
            //if the route is on '/delivery' (ie; id = 'delivery'), then the name and icon which should have to be highleted is as follows
            id: 'delivery',
            icon: <RiShoppingBag3Line />,
            name: 'Delivery'
        },
        {
            //if the route is on dining, then as the following
            id: 'dining',
            icon: <IoFastFoodOutline />,
            name: "Dining"
        },
        {
            id: 'night',
            icon: <BiDrink />,
            name: "Night Life"
        },
        {
            id: 'nutrition',
            icon: <IoNutritionOutline />,
            name: "Nutrition"
        }
    ]);

    //to get the value of the type from the url, we could use the useParams package
    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden flex bg-white shadow-lg fixed bottom-0 z-10 w-full items-center justify-between md:justify-evenly text-gray-500 border" >
                {allTypes.map((items) => (
                    <Link key={items.id} to={`/${items.id}`} className="w-3/4" >
                        <div className={
                            type === items.id
                                ? "flex items-center text-center flex-col relative text-xl text-zomato-400"
                                : "flex items-center text-center flex-col text-xl"
                        }>
                            <div
                                className={
                                    type === items.id
                                        ? "w-full h-full border-t-2 border-zomato-400 flex flex-col items-center pt-3"
                                        : "flex flex-col items-center pt-3"
                                }
                            >
                                {items.icon}
                            </div>
                            <h5 className="text-sm pb-3">{items.name}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

const FoodTab = () => {
    return (
        <>
            <MobileTabs />
        </>
    )
}

export default FoodTab;
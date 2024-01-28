import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IoFastFoodOutline, IoNutritionOutline } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import classnames from 'classnames';

//Mobile / small screen view
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

//Large screen view
const LargeTabs = () => {

    const [allTypes] = useState([
        {
            id: "delivery",
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name: "Delivery",
            activeColor: "yellow",
        },
        {
            id: "dining",
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            activeColor: "blue",
            name: "Dining Out",
        },
        {
            id: `night`,
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            activeColor: "purple",
            name: "Night life",
        },
        {
            id: `nutrition`,
            imageDefault:
                "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            imageActive:
                "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            activeColor: "yellow",
            name: "Nutrition",
        }
    ]);

    const { type } = useParams();

    return (
        <>
            <div className="hidden lg:flex container gap-14 px-20 my-8 mx-auto">
                {allTypes.map((item) => (
                    <Link to={`/${item.id}`} key={item.id} className="w-36" >
                        <div
                            className={classnames( //applying different classnames for active section
                                //apply this properties as default
                                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                                {
                                    //apply these properties only if type === item.id
                                    "border-b-2 border-zomato-500": type === item.id
                                } //if we have more condtions then we can add after a comma here 
                            )}
                        >
                            <div className={classnames(
                                "w-16 h-16 bg-gray-100 p-4 rounded-full",
                                {
                                    [`bg-${item.activeColor}`]: type === item.id
                                }
                            )}>
                                <img
                                    src={type === item.id ? item.imageActive : item.imageDefault}
                                    alt={item.id}
                                    className="w-full h-full"
                                />
                            </div>
                            <h3 className={
                                type === item.id
                                    ? "text-md text-zomato-400"
                                    : "text-md text-gray-700"
                            }>
                                {item.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
};

const FoodTab = () => {
    return (
        <>
            <MobileTabs />
            <LargeTabs />
        </>
    )
}

export default FoodTab;
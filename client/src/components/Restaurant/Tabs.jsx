import React from 'react';
import classnames from 'classnames';
import { useParams, Link, useLocation } from 'react-router-dom'

//single Tab
const Tab = (props) => {
    const { _id } = useParams();

    return (
        <Link to={`/restaurant/${_id}/${props.route}`} className='relative'>
            <div className={
                classnames('text-gray-500 relative font-semibold',
                    { "text-zomato-400 ": props.isActive }
                )}>
                <h3 className='text-lg md:text-xl'>{props.title}</h3>
            </div>
            <div className={classnames("w-full h-1 absolute -bottom-4",
                { "bg-zomato-400": props.isActive }
            )} />
        </Link>
    )
}


//Main tabs
const Tabs = () => {

    //to get the location of the url
    const Location = useLocation();

    //useParams will only get us the parameter. To highlight the tab that we are currently in we need to get the url path name
    const currentPath = Location.pathname;

    const tabs = [
        {
            title: "Overview",
            route: 'overview',
            isActive: currentPath.includes('overview') //check if the current path have 'overview'
        },
        {
            title: "Order Online",
            route: "order-online",
            isActive: currentPath.includes("order-online")
        },
        {
            title: "Reviews",
            route: "reviews",
            isActive: currentPath.includes("reviews")
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu")
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos")
        },
    ]

    return (
        <div className='flex relative items-center pb-4 gap-8 md:gap-20 overflow-x-scroll lg:overflow-auto border-b-2'>
            {tabs.map((tab, index) => (
                <Tab {...tab} key={index} />
            ))}
        </div>
    )
}

export default Tabs
import React from 'react';
import { TiStar } from 'react-icons/ti';

const MenuSimiliarRestaurant = (props) => {
    return (
        <div className='mx-2 my-2'>
            <div className='bg-white shadow-md p-2 rounded-md'>
                <div className='w-full h-48'>
                    <img
                        src={props.image}
                        alt={props.name}
                        className='w-full h-full object-cover rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-2 p-3'>
                    <h3 className='font-semibold text-lg'>{props.title}</h3>
                    <div className='flex items-center justify-start text-sm gap-5'>
                        <span className='flex items-center justify-start gap-2 text-sm'>
                            <span className='flex text-sm items-center gap-1 bg-green-700 text-white px-2 py-1 rounded'>
                                3.0 <TiStar />
                            </span>
                            Dining
                        </span>
                        <span className='flex items-center justify-start gap-2 text-sm'>
                            <span className='flex text-sm items-center gap-1 bg-green-700 text-white px-2 py-1 rounded'>
                                4.7 <TiStar />
                            </span>
                            Delivery
                        </span>
                    </div>
                </div>
                <h4 className='p-2'>Brosted, American, Burger</h4>
            </div>
        </div>
    )
}

export default MenuSimiliarRestaurant
import React from 'react';

const DeliverySmCard = ({ title, image }) => {

    return (
        <>
            <div className='lg:hidden rounded-md w-full'>
                <div className='w-full h-26'>
                    <img
                        className='w-full h-full object-center rounded-full'
                        src={image}
                        alt={title}
                    />
                </div>
                <div>
                    <h3 className='text-sm my-1 text-center font-light'>
                        {title}
                    </h3>
                </div>
            </div>
        </>
    )
}

const DeliveryLgCard = ({ title, image }) => {
    return (
        <>
            <div className='hidden lg:block rounded-md w-full'>
                <div className='w-full h-26'>
                    <img
                        className='w-full h-full object-center rounded-full'
                        src={image}
                        alt={title}
                    />
                </div>
                <div>
                    <h3 className='text-lg my-1 text-center font-semibold'>
                        {title}
                    </h3>
                </div>
            </div>
        </>
    )
}

const DeliveryCategoryCard = (props) => {
    return (
        <>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </>
    )
}

export default DeliveryCategoryCard
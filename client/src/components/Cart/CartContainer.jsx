import React, { useState, useEffect } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import { IoMdArrowDropup, IoMdArrowDropright } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux'

//component
import FoodItem from './FoodItem';

const CartData = ({ toggle }) => {

    const cart = useSelector((globalState) => globalState.cart.cart);

    const navigate = useNavigate();

    const continueToCheckout = () => navigate('/checkout/orders');

    return (
        <>
            <div className='flex items-center justify-start md:justify-between gap-5 py-2 px-3 rounded-md bg-zomato-50'>
                <div className='flex flex-col items-start'>
                    <small className='flex items-center gap-1 cursor-pointer' onClick={toggle}>
                        {cart.length} Items <IoMdArrowDropup />
                    </small>
                    {/* reduce function to combine the total price of the products in the cart */}
                    <h4>₹ {cart.reduce((acc, curVal) => acc + curVal.totalPrice, 0)} <small>(+ Tax)</small> </h4>
                </div>
                <button
                    onClick={continueToCheckout}
                    className='flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg'
                >
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    )
};

const CartContainer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const cart = useSelector((globalState) => globalState.cart.cart);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
            {/* if cart have any elements in it, then only show the cart section */}
            {cart.length &&
                <>
                    {isOpen && (
                        <div className='fixed w-full overflow-y-scroll h-48 bg-gray-100 z-50 p-2 bottom-14 px-3'>
                            <div className='flex items-center justify-between md:px-20'>
                                <h3 className='text-xl font-semibold'>Your Orders</h3>
                                <IoCloseSharp onClick={closeCart} className='cursor-pointer' />
                            </div>

                            <hr className='my-2' />

                            <div className='flex flex-col gap-2 md:px-20'>
                                {cart.map((food) => (
                                    <FoodItem key={food._id} {...food} />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className='fixed w-full bg-white z-10 p-2 bottom-0 ms-auto lg:px-20'>
                        <CartData toggle={toggleCart} />
                    </div>
                </>
            }
        </>
    )
}

export default CartContainer

//cart dummy data
// {
//     image: "https://b.zmtcdn.com/data/dish_photos/44f/bc817ecae2106a8afad4d6f22be7c44f.jpg",
//     name: "Chicken Mandhi Spicy",
//     rating: 4.5,
//     price: 200,
//     description: "Chicken mandhi spicy is a flavourful Saudi Arabian rice dish made with tender chicken marinated in aromatic spices",
//     quantity: 2,
//     totalPrice: 400
// },
// {
//     image: "https://b.zmtcdn.com/data/dish_photos/5f3/426d684ea6b0f7edc2cd44119a0e55f3.jpg",
//     name: "Al Faham Mandi Quarter",
//     rating: 3.5,
//     price: 250,
//     description: "Chicken slow cooked in a fiery blend of chilli powder, coriander powder and a freshly-ground red chilli paste.",
//     quantity: 3,
//     totalPrice: 750
// }
import React, { useState } from "react";
import { BsShieldLockFill } from 'react-icons/bs';

//import layout
import CheckoutLayout from '../layouts/Checkout.layout';

//component
import FoodItem from '../components/Cart/FoodItem';
import AddressList from "../components/Checkout/AddressList";

const Checkout = () => {

    const [cart, setCart] = useState([
        {
            image: "https://b.zmtcdn.com/data/dish_photos/44f/bc817ecae2106a8afad4d6f22be7c44f.jpg",
            name: "Chicken Mandhi Spicy",
            rating: 4.5,
            price: 200,
            description: "Chicken mandhi spicy is a flavourful Saudi Arabian rice dish made with tender chicken marinated in aromatic spices",
            quantity: 2,
            totalPrice: 400
        },
        {
            image: "https://b.zmtcdn.com/data/dish_photos/5f3/426d684ea6b0f7edc2cd44119a0e55f3.jpg",
            name: "Al Faham Mandi Quarter",
            rating: 3.5,
            price: 250,
            description: "Chicken slow cooked in a fiery blend of chilli powder, coriander powder and a freshly-ground red chilli paste.",
            quantity: 3,
            totalPrice: 750
        }
    ]);

    const address = [
        {
            name: "Home",
            location: "Kalamaserry, Colony street"
        },
        {
            name: "vytila",
            location: "Near Vytilla metro station"
        }
    ];

    // razorpay function
    const payNow = () => {
        let options = {
            key: "rzp_test_SSAhtDJD2hmjQV",
            amount: cart.reduce((total, current) => total + current.totalPrice, 0) * 100, //since the amount calculated using razorpay will be in paisa. To convert it into rupees we multiplied it with 100
            currency: "INR",
            name: "Zomato Master",
            description: "Fast Delivery Service",
            handler: (data) => {
                alert("Payment Successfull");
                console.log(data);
            },
            prefill: {
                name: "Test User Name",
                email: "test123@gmail.com"
            },
            theme: {
                color: "#e23744"
            }
        }

        let razorpay = new window.Razorpay(options);
        razorpay.open();
    }

    return (
        <div className="my-3 flex flex-col gap-3 items-center">
            <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
            <div className="w-full md:w-3/5 rounded-lg py-3 drop-shadow-2xl bg-white flex flex-col items-center p-4">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="flex w-full flex-col gap-2 items-center">
                    <h5 className="text-base tracking-wider">ORDER FROM</h5>
                    <div className="flex w-full flex-col items-center text-gray-400">
                        <h4>Domino's Pizza</h4>
                        <small>Edapally, Thrissur Road</small>
                    </div>
                    <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
                        {cart.map((item) => (<FoodItem key={item._id} {...item} />))}
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-3/5 items-center">
                        <h4 className="text-xl font-semibold">Choose Address</h4>
                        <AddressList address={address} />
                    </div>
                </div>
                <button onClick={payNow} className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
                    Pay Securely <BsShieldLockFill />
                </button>
            </div>
        </div>
    )
}

export default CheckoutLayout(Checkout);
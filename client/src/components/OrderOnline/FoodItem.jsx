import React, { useState, useEffect } from 'react'
import ReactStars from 'react-rating-stars-component';
import { AiOutlinePlus } from 'react-icons/ai';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getFood } from '../../redux/reducers/food/food.action';
import { getImage } from '../../redux/reducers/image/image.action';
import { addToCart } from '../../redux/reducers/cart/cart.action';

const FoodItem = (props) => {

    const [food, setFood] = useState({});

    const dispatch = useDispatch();

    const cart = useSelector((globalState) => globalState.cart.cart);

    useEffect(() => {
        dispatch(getFood(props._id))
            .then((data) => {
                setFood(data.payload.food);
                dispatch(getImage(data.payload.food.photos)).then(data => {
                    const { images } = data.payload;
                    images.length &&
                        setFood((prev) => ({ ...prev, image: images[0].location }))
                });
                return data.payload.food
            }).then((data) => {
                cart.forEach((each) => {
                    if (each._id === data._id) {
                        setFood((prev) => ({ ...prev, isAddedToCart: true }));
                    }
                });
            })
    }, [cart]);

    const addFoodToCart = () => {
        dispatch(addToCart({ ...food, quantity: 1, totalPrice: food.price }));
        setFood((prev) => ({ ...prev, isAddedToCart: true }));
    };

    return (
        <>
            <div className='flex items-start gap-2'>
                {food?.name && (
                    <div className='flex items-start gap-4 w-full p-1'>
                        {food?.image && (
                            <div className='h-24 w-1/3 md:h-24 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden'>
                                <img src={food?.image} alt="Food Item" className='w-full h-full object-cover object-center' />
                            </div>
                        )}
                        <div className='w-3/4 md:w-7/12 flex flex-col gap-1'>
                            <div className='flex items-start justify-between'>
                                <h3 className='text-xl font-semibold'>
                                    {food?.name}
                                </h3>
                            </div>
                            <ReactStars count={5} edit={false} value={4} isHalf={true} />
                            <h5 className='text-gray-500'>₹ {food.price}</h5>
                            <p className='text-gray-500'>{food.description}</p>
                            <button className='md:hidden flex justify-center items-center gap-2 text-zomato-400 bg-zomato-50 border-zomato-400 px-2 py-1 rounded-lg'>
                                <AiOutlinePlus /> Add
                            </button>
                        </div>
                        <div className='hidden md:block w-2/12'>
                            <button
                                className='flex items-center gap-2 text-zomato-400 bg-zomato-50 hover:bg-zomato-100 transition duration-200 ease-in-out border-zomato-400 px-2 py-1 rounded-lg'
                                disabled={food?.isAddedToCart}
                                onClick={addFoodToCart}
                            >
                                {food.isAddedToCart ?
                                    ("Added")
                                    :
                                    (<><AiOutlinePlus /> Add</>)
                                }
                            </button>
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}

export default FoodItem
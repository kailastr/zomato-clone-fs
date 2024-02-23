import React, { useState } from 'react';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';

//components
import FloatMenuBtn from '../OrderOnline/FloatMenuBtn';
import FoodList from '../OrderOnline/FoodList';
import MenuListContainer from '../OrderOnline/MenuListContainer';

const OrderOnline = () => {

    const [menu, setMenu] = useState([
        {
            name: "Mandi",
            items: [
                {
                    image: "https://b.zmtcdn.com/data/dish_photos/44f/bc817ecae2106a8afad4d6f22be7c44f.jpg",
                    name: "Chicken Mandhi Spicy",
                    rating: 4.5,
                    price: 219,
                    description: "Chicken mandhi spicy is a flavourful Saudi Arabian rice dish made with tender chicken marinated in aromatic spices"
                },
                {
                    image: "https://b.zmtcdn.com/data/dish_photos/5f3/426d684ea6b0f7edc2cd44119a0e55f3.jpg",
                    name: "Al Faham Mandi Quarter",
                    rating: 3.5,
                    price: 249,
                    description: "Chicken slow cooked in a fiery blend of chilli powder, coriander powder and a freshly-ground red chilli paste."
                },
                {
                    image: "https://b.zmtcdn.com/data/dish_photos/6af/fe7d03f7831815bf84e3bb8329d796af.jpg",
                    name: "Al Faham Chicken Kanthari Mandi",
                    rating: 4.5,
                    price: 249,
                    description: "Al faham chicken kanthari mandi is a spicy grilled chicken dish from Kerala"
                }
            ]
        },
        {
            name: "Al Faham Kuboos Combos",
            items: [
                {
                    image: "https://b.zmtcdn.com/data/dish_photos/f82/dc635ea14d5d63b4714c54740141ff82.jpg?fit=around|130:130&crop=130:130;*,*",
                    name: "Al Faham Chicken with Kuboos",
                    rating: 3,
                    price: 169,
                    description: "Al faham chicken with kuboos is a delicious Middle Eastern dish consisting of grilled marinated chicken,"
                },
                {
                    image: "https://b.zmtcdn.com/data/dish_photos/da8/2fb458ddce4a27797000043645fa4da8.jpg?fit=around|130:130&crop=130:130;*,*",
                    name: "Kanthari Chicken Al Faham with Kuboos",
                    rating: 4.5,
                    price: 169,
                    description: "Kanthari chicken al faham is a spicy and flavourful grilled chicken dish served with traditional Arabic bread called kuboos"
                }
            ]
        },
    ]);

    const [selected, setSelected] = useState("");

    const onClickHandler = (e) => {
        if (e.target.id) {
            setSelected(e.target.id);
        }

        return;
    }

    return (
        <>
            <div className='w-full flex items-start'>
                <aside className='hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 w-1/4 sticky top-12'>
                    {menu.map((item, index) => (
                        <MenuListContainer
                            {...item}
                            key={index}
                            onClickHandler={onClickHandler}
                            selected={selected}
                            target={index}
                        />
                    ))}
                </aside>
                <div className='w-full px-3 md:w-3/4 overflow-auto h-screen sticky top-12'>
                    <div className='mb-4 pl-3'>
                        <h2 className='text-xl font-semibold'>Order Online</h2>
                        <h4 className='flex items-center gap-2 font-light text-gray-500'>
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 52 min
                        </h4>
                    </div>
                    <section className='flex overflow-y-screen flex-col gap-3 md:gap-5'>
                        {menu.map((item, index) => (
                            <FoodList key={index} {...item} target={index} />
                        ))}
                    </section>
                </div>
            </div>
            <FloatMenuBtn
                menu={menu}
                onClickHandler={onClickHandler}
                selected={selected}
            />
        </>
    )
}

export default OrderOnline
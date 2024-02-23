import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

//components
import MenuListContainer from './MenuListContainer';

const FloatMenuBtn = (props) => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => setIsClicked((prev) => !prev);
    return (
        <div className='fixed z-30 w-8/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden'>
            {isClicked && (
                <div className='p-3 bg-white h-48 overflow-y-scroll drop-shadow-md rounded-md'>
                    {props.menu.map((item, index) => (
                        <MenuListContainer
                            {...item}
                            key={index}
                            onClickHandler={props.onClickHandler}
                            selected={props.selected}
                            target={index}
                        />
                    ))}
                </div>
            )}
            <button className='text-white rounded-md flex items-center gap-2 bg-yellow-800 px-3 py-1' onClick={toggleMenu}>{isClicked ? <MdClose /> : <HiMenu />} Menu </button>
        </div>
    )
}

export default FloatMenuBtn
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

//component
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';

// redux
import { useSelector, useDispatch } from 'react-redux'; //to select values from the redux
import { signOut } from '../../redux/reducers/auth/auth.action'
import { clearUser } from '../../redux/reducers/user/user.action';

const MobileNavbar = ({ user, setIsDropdownOpen, IsDropdownOpen, signIn, signUp }) => {

    const SignIn = () => {
        signIn();
        setIsDropdownOpen(false);
    }

    const SignUp = () => {
        signUp();
        setIsDropdownOpen(false);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOut = () => {
        dispatch(signOut());
        dispatch(clearUser());
        navigate('/delivery'); //to navigate to delivery page after signOut
        setIsDropdownOpen(false);
    }

    return (
        <>
            <div className='container flex w-full items-center justify-between lg:hidden m-auto py-5'>
                <div className='w-28'>
                    <Link to={'/'}>
                        <img
                            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                            alt="Zomato Logo"
                            className='w-full h-full'
                        />
                    </Link>
                </div>
                <div className='flex items-center gap-3 relative'>
                    <button className='bg-zomato-400 text-white py-2 px-3 rounded-full'>
                        Use App
                    </button>

                    {/* if any user exist (is logged in), then show thier avatar signOut section or show the logo signIn & signUp section */}
                    {user?.fullName ? (
                        <>
                            {/* set the prev(previous value ie; false) to true through onClick */}
                            <div onClick={() => setIsDropdownOpen((prev) => !prev)} className='border border-gray-400 text-zomato-400 w-9 h-9 rounded-full'>
                                <img
                                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                    alt="User avatar"
                                    className='w-full h-full rounded-full object-cover'
                                />
                            </div>

                            {/* only open when the value of IsDropdownOpen is true */}
                            {
                                IsDropdownOpen && (
                                    <div className='absolute shadow-lg py-3 -bottom-16 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200'>
                                        <button onClick={SignOut}>Sign Out</button>
                                    </div>
                                )
                            }
                        </>
                    ) : (
                        <>
                            <span
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className='border p-2 border-gray-400 rounded-full'
                            >
                                <FaUserAlt className='w-full h-full' />
                            </span>
                            {
                                IsDropdownOpen && (
                                    <div className='absolute shadow-lg py-3 -bottom-24 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200'>
                                        <button onClick={SignIn}>Sign In</button>
                                        <button onClick={SignUp}>Sign Up</button>
                                    </div>
                                )
                            }
                        </>
                    )}


                </div>
            </div>
        </>
    )
}

const LargeNav = ({ user, setIsDropdownOpen, IsDropdownOpen, signIn, signUp }) => {

    //function to open the modal and also at the time to close the dropdown also
    const SignIn = () => {
        signIn();
        setIsDropdownOpen(false);
    }

    const SignUp = () => {
        signUp();
        setIsDropdownOpen(false);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOut = () => {
        dispatch(signOut());
        dispatch(clearUser());
        navigate('/delivery');
        setIsDropdownOpen(false);
    }

    return (
        <>
            <div className='container w-full items-center justify-between hidden lg:flex m-auto py-2 px-14'>
                <div className='gap-4 items-center justify-around flex'>
                    <div className='w-20'>
                        <Link to={'/'}>
                            <img
                                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                alt="Zomato Logo"
                                className='w-full h-full'
                            />
                        </Link>
                    </div>
                </div>
                <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded-2xl'>
                    <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
                        <span className='text-zomato-400'>
                            <HiLocationMarker />
                        </span>
                        <input type="text" name="" id="" placeholder='Kochi' className='w-full focus:outline-none' />
                        <IoMdArrowDropdown />
                    </div>
                    <div className='flex items-center w-full gap-3'>
                        <RiSearch2Line />
                        <input type="search" name="" id="" placeholder='Search for Restaurants, foods or cuisines' className='w-full focus:outline-none' />
                    </div>
                </div>
                <div className='flex items-center gap-3 relative'>

                    {/* if any user exist (is logged in), then show thier avatar signOut section or show the logo signIn & signUp section */}
                    {user?.fullName ? (
                        <>
                            {/* set the prev(previous value ie; false) to true through onClick */}
                            <div onClick={() => setIsDropdownOpen((prev) => !prev)} className='border border-gray-400 text-zomato-400 w-9 h-9 rounded-full'>
                                <img
                                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                    alt="User avatar"
                                    className='w-full h-full rounded-full object-cover'
                                />
                            </div>

                            {/* only open when the value of IsDropdownOpen is true */}
                            {
                                IsDropdownOpen && (
                                    <div className='absolute shadow-lg py-3 -bottom-16 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200'>
                                        <button onClick={SignOut}>Sign Out</button>
                                    </div>
                                )
                            }
                        </>
                    ) : (
                        <>
                            <span
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className='border p-2 border-gray-400 rounded-full'
                            >
                                <FaUserAlt className='w-full h-full' />
                            </span>
                            {
                                IsDropdownOpen && (
                                    <div className='absolute shadow-lg py-3 -bottom-24 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200'>
                                        <button onClick={SignIn}>Sign In</button>
                                        <button onClick={SignUp}>Sign Up</button>
                                    </div>
                                )
                            }
                        </>
                    )}


                </div>
            </div>
        </>
    )
}

const Navbar = () => {

    //for Modal working
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    const openSignInModal = () => setOpenSignIn(true);
    const openSignUpModal = () => setOpenSignUp(true);

    const [IsDropdownOpen, setIsDropdownOpen] = useState(false);

    // const user = {
    //     fullName: ""
    // };

    const user = useSelector((globalState) => globalState.user); //global state represents the whole redux storage

    return (
        <>
            {/* Sign in and singUp Modal */}
            <Signin isOpen={openSignIn} setIsOpen={setOpenSignIn} />
            <Signup isOpen={openSignUp} setIsOpen={setOpenSignUp} />

            <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full items-center'>
                <MobileNavbar
                    user={user}
                    setIsDropdownOpen={setIsDropdownOpen}
                    IsDropdownOpen={IsDropdownOpen}
                    signIn={openSignInModal}
                    signUp={openSignUpModal}
                />

                <LargeNav
                    user={user}
                    setIsDropdownOpen={setIsDropdownOpen}
                    IsDropdownOpen={IsDropdownOpen}
                    signIn={openSignInModal}
                    signUp={openSignUpModal}
                />
            </nav>
        </>
    )
}

export default Navbar
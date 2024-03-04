import React from 'react';
import { FcGoogle } from 'react-icons/fc';
//headless ui
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/reducers/auth/auth.action';
import { getMySelf } from '../../redux/reducers/user/user.action';

const Signup = ({ isOpen, setIsOpen }) => {

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const dispatch = useDispatch();

    const submit = async () => {
        await dispatch(signUp(userData));
        await dispatch(getMySelf());
        closeModal();
        setUserData({ email: "", password: "", fullName: "" })
    }

    //to redirect user for the google authenticaiton
    const googleSignUp = () => (
        window.location.href = "http://localhost:4000/auth/google"
    )

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-zomato-400 text-center"
                                    >
                                        Create an account in Zomato
                                    </Dialog.Title>
                                    <div>{/* <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div> */}</div>

                                    <button
                                        className='py-2 justify-center rounded-lg flex items-center gap-2 w-full my-3 border border-gray-400 bg-white text-gray-700 hover:bg-blue-100'
                                        onClick={googleSignUp}
                                    >
                                        Sign Up with google <FcGoogle />
                                    </button>

                                    <form className='flex flex-col gap-2'>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor="fullName">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                value={userData.fullName}
                                                onChange={handleChange}
                                                placeholder='Kailas T R'
                                                className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={userData.email}
                                                onChange={handleChange}
                                                placeholder='user@gmail.com'
                                                className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                                            />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={userData.password}
                                                onChange={handleChange}
                                                placeholder='**********'
                                                className='w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400'
                                            />
                                        </div>
                                        <div className='w-full text-center bg-zomato-400 text-white py-3 px-2 mt-2 rounded-lg' onClick={submit}>
                                            Sign In
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Signup
import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';

const CheckoutNavbar = () => {

  const user = useSelector((globalState) => globalState.user);
  console.log(user);

  const navigate = useNavigate()

  return (
    <>
      <nav className='p-4 flex bg-white shadow-md w-full items-center'>
        <div className='container px-4 md:px-20 mx-auto'>
          <div className='flex items-center justify-between w-full'>
            <AiOutlineArrowLeft onClick={() => navigate(-1)} className='cursor-pointer' />
            <div className='w-28'>
              <Link to={'/'}>
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato Logo" className='w-full h-full' />
              </Link>
            </div>
            <div className='flex items-center gap-3'>
              <div className='border border-gray-300 text-zomato-400 w-12 h-12 rounded-full overflow-hidden'>
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/90/59/88/1000_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"
                  alt="User Image"
                  className='w-full h-full rounded-full object-cover'
                />
              </div>
              {user?.fullName}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default CheckoutNavbar
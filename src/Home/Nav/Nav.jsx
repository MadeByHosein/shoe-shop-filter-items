import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import logo from '/images/logo.png'

const Nav = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 border border-b-stone-300'>
        <div className='flex items-center justify-around '>
            <div className=''>
                            <img 
                                src={logo} 
                                alt="logo"
                                width={120} 
                                height={120}
                            />                       
            </div>

            <div className='grow max-w-50 sm:max-w-sm lg:max-w-lg'>                        
                <div>
                    <input  type="text" 
                            placeholder='Enter What You Want' 
                            className='w-full border border-none rounded-md bg-gray-200/50 text-gray-900 py-2 px-3 text-sm outline-none'
                        />
                </div>
            </div>
            <div className='flex items-center gap-4 sm:gap-6 mx-2'>
                <a href="#">
                    <FiHeart className='w-7 h-7 text-gray-500 '/>
                </a> 

                <a href='#'> 
                    <AiOutlineShoppingCart className="w-7 h-7 text-gray-500 "/>
                </a>

                <a href="#">
                    <AiOutlineUserAdd className="w-7 h-7 text-gray-500 "/>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Nav
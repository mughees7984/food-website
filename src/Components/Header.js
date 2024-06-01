import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({ count }) => {
    const [sideNav, setSideNav] = useState(false);
    
    return (
        <div className='fixed z-50 top-0 left-0 w-full bg-white'>
            <div className='flex justify-between py-[20px] px-[20px] font-semibold border-b relative'>
                <div>
                    <Link to='/'>
                        <p className='cursor-pointer'>Yumi <span className='text-[#fbc531]'>Food</span></p>
                    </Link>
                </div>
                <div>
                    {/* <RxCross2 size={25} className='absolute top-3 right-3 cursor-pointer'  /> */}
                    <ul className='sm:flex gap-12 hidden cursor-pointer'>
                        <Link to='/'>
                            <li className='hover:text-[#fbc531]'>Home</li>
                        </Link>
                        <Link to='/aboutus'>
                            <li className='hover:text-[#fbc531]'>About us</li>
                        </Link>
                        <Link to='/ourfood'>
                            <li className='hover:text-[#fbc531]'>Our Food</li>
                        </Link>
                        <Link to='/signin'>
                            <li className='hover:text-[#fbc531]'>Sign IN</li>
                        </Link>
                    </ul>

                </div>
                {sideNav && <div className='bg-[#f5f6fa] w-[300px] z-10 absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center'>
                    <RxCross2
                        size={25}
                        className='absolute top-3 right-3 cursor-pointer'
                        onClick={() => setSideNav(!sideNav)}
                    />
                    <ul className='flex gap-12 flex-col cursor-pointer'>
                        <Link to='/'>
                            <li className='hover:text-[#fbc531]' onClick={() => setSideNav(!sideNav)}>Home</li>
                        </Link>
                        <Link to='/aboutus'>
                            <li className='hover:text-[#fbc531]' onClick={() => setSideNav(!sideNav)}>About us</li>
                        </Link>
                        <Link to='/ourfood'>
                            <li className='hover:text-[#fbc531]' onClick={() => setSideNav(!sideNav)}>Our Food</li>
                        </Link>
                        <Link to='/signin'>
                            <li className='hover:text-[#fbc531]' onClick={() => setSideNav(!sideNav)}>Sign IN</li>
                        </Link>
                    </ul>

                </div>}
                <div className='flex gap-5 '>
                    <p><GiHamburgerMenu
                        size={30}
                        className='cursor-pointer my-5 block sm:hidden'
                        onClick={() => setSideNav(!sideNav)}
                    />
                    </p>
                    <p>
                        {count}
                        <FaCartShopping size={30} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header


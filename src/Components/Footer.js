import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-black text-white'>
                <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6'>
                    <div>
                        <h2 className='font-bold mb-3 text-[30px] '>Yumi <span className='text-[#fbc531]'>Food</span></h2>
                        <p className='text-[20px] text-[gray]'> © 2023 Bundl Technologies Pvt. Ltd</p>
                    </div>

                    <div>
                        <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>About</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Careers</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Teams</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Swiggy one</p>
                    </div>

                    <div>
                        <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Help & Support</h2>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Company</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Partner with us</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Ride with us</p>
                    </div>

                    <div>
                        <p>We deliver to:</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Islamabad</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Karachi</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Lahore</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Peshawar</p>
                        <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Faislabad</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer
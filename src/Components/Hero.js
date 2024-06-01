import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Hero = () => {

    const imgData = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
    ]

    const [slider, setSlider] = useState(0)

    const handlePlus = () => {
        setSlider(slider + 1);
        if (slider >= 2) {
            setSlider(2);
        }
    }
    const handleMinus = () => {
        setSlider(slider - 1);
        if (slider <= 0) {
            setSlider(0);
        }
    }

    useEffect(() => {
        const Interval = setInterval(() => {
            handlePlus();
        }, 2000)
        return () => {
            clearInterval(Interval);
        }

    }, [slider])
    return (
        <>
            <div className='mt-[100px]'>
                <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
                    {imgData.map((item, index) => {
                        return (
                            <div className={`${slider == index ? "block" : "hidden"}`}>
                                <img
                                    src={item.url}
                                    alt=""
                                    key={index}
                                    className='w-full h-[80vh] rounded-2xl object-cover'
                                />
                            </div>
                        )
                    })}
                    <div className='w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl'></div>
                    <div className='absolute text-white text-center w-full font-semibold top-[50%] flex justify-center text-[20px] md:text-[30px] '>
                    <p>
                        Welcome to the world of tasty and fresh food
                    </p>
                    </div>
                    <div className='flex justify-between w-full px-5 absolute top-[50%]  text-white'>
                        <FaAngleLeft size={35} className='cursor-pointer' onClick={handleMinus} />
                        <FaAngleRight size={35} className='cursor-pointer' onClick={handlePlus} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
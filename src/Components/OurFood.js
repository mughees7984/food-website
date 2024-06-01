import React from 'react'
import { mealData } from '../data'

const Food = ({ handleAdd}) => {
    return (
        <>
            <div className='w-[90%] mx-auto mt-[100px]'>
                <div className=''>
                    <h2 className='text-center text-[#fbc531] text-3xl font-bold py-5'>
                        Our Food
                    </h2>
                </div>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2'>
                    {mealData.map((meal)=>{
                        return(
                            <div className='flex justify-center items-center flex-col'>
                                <div>
                                <img src={meal.image} alt="" className='w-[200px] h-[200px] rounded-lg object-cover'/>
                                </div>
                                <div className='flex justify-center py-2 px-4 flex-col items-center'>
                                    <p className='text-xl font-semi-bold uppercase'>{meal.name}</p>
                                    <p className='text-xl font-semi-bold uppercase'>{meal.price}</p>
                                    <button className='bg-[black] w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:text-[#fbc531] font-semibold onClick={handleAdd} '>
                                        Add to cart
                                        </button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Food
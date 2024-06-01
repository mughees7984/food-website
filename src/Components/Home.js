import React from 'react';
import Hero from './Hero.js';
import Delivery from './Delivery';
import FoodSlider from './FoodSlider';

const Home = ({ handleAdd}) => {
    return (
        <div>
            <Hero/>
            <Delivery />
            <FoodSlider handleAdd={handleAdd} />
            
        </div>
    )
}

export default Home
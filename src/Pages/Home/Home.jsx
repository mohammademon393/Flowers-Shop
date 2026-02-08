import React from 'react';
import Hero from './Hero';
import FutureFlower from './FutureFlower';

const flowersPromise = fetch('/flowers.json')
    .then(res => res.json())
    .then(data => console.log(data))

const Home = () => {
    
    return (
      <div>
        <Hero></Hero>
        <FutureFlower flowersPromise={flowersPromise}></FutureFlower>
      </div>
    );
};

export default Home;
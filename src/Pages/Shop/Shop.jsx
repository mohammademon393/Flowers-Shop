import React from 'react';
import ShopHero from './ShopHero';
import SearchBar from './SearchBar';

const Shop = () => {
    return (
        <div className="min-h-screen">
            <ShopHero></ShopHero>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Shop;
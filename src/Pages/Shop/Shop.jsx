import React from 'react';
import ShopHero from './ShopHero';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

const Shop = () => {
    return (
        <div className="min-h-screen">
            <ShopHero></ShopHero>
            <SearchBar></SearchBar>
            <CategoryFilter></CategoryFilter>
            <PriceFilter></PriceFilter>
        </div>
    );
};

export default Shop;
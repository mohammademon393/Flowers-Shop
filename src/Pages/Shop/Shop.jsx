import React from 'react';
import ShopHero from './ShopHero';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import SortSelect from './SortSelect';
import ProductCard from './ProductCard';

const Shop = () => {
    return (
        <div className="min-h-screen">
            <ShopHero></ShopHero>
            {/* <SearchBar></SearchBar>
            <CategoryFilter></CategoryFilter>
            <PriceFilter></PriceFilter>
            <SortSelect></SortSelect>
            <ProductCard></ProductCard> */}
        </div>
    );
};

export default Shop;
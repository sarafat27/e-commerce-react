import React from 'react';
import './Product.css'
const Product = ({ handleAddToCart, product }) => {
    const { name, img, seller, ratings, price } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>manufacturer: {seller}</small></p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;
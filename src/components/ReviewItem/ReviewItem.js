import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { product, removeProduct } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-detail">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>price: <span className='product-price'>${price}</span></p>
                    <p><small>Shipping charge: ${shipping} </small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => removeProduct(product)} className='dlt-btn'>
                        <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
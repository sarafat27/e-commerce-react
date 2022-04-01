import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const removeProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='proceed-btn' onClick={() => navigate('/inventory')}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
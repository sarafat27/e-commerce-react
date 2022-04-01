import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>These are the products you have ordered :{products.length}</h1>
            <p>cart has {cart.length} items</p>
        </div>
    );
};

export default Orders;
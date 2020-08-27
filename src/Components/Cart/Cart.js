import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const courses=props.carts;
    let totalPrice=courses.reduce((sum,course)=>sum+course.price,0);
    return (
        <div className="showCart">
            <p>Enrolled : {courses.length}</p>
            <p>Total Price : {totalPrice}</p>
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';

function Card() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 0 ? count - 1 : 0);
  const addToCart = () => setCart(cart + count * 10);

  return (
    <div style={{ border: '1px solid gray', padding: '40px', width: '250px', backgroundColor: 'orange', borderRadius: '10px', marginLeft: '500px', height: '350px' }}>
      <h3 style={{ marginLeft: '90px', fontSize: '20px', fontWeight: 'bold' }}>PIZZA </h3>
      <p>Price: $10</p>
      <img style={{ width: '245px' }} src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', backgroundColor: 'burlywood', width: 'fit-content', marginTop: '10px' }}>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
        <button style={{ marginLeft: '80px' }} onClick={addToCart}>Add to Cart</button>
      </div>
      <p style={{ marginLeft: '65px' }}>Total Value: ${cart}</p>
      <p style={{ marginLeft: '50px' }}>Thanks for Ordering !</p>
    </div>
  );
}

export default Card;


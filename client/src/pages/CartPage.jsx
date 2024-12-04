import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const updateQuantity = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Prix : {item.price / 100} €</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item, e.target.value)}
            />
            <button onClick={() => handleRemove(item)}>Supprimer</button>
          </div>
        ))
      )}
      <h3>Total : {total / 100} €</h3>
    </div>
  );
};

export default CartPage;
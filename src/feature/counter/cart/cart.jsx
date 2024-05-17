import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, removeProduct, updateProductQuantity } from './cartSlice';

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} x {product.quantity}
            <button onClick={() => dispatch(removeProduct(product.id))}>Eliminar</button>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => dispatch(updateProductQuantity({ id: product.id, quantity: Number(e.target.value) }))}
              min="1"
            />
          </li>
        ))}
      </ul>
      <div>
        <h3>Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</h3>
      </div>
    </div>
  );
};

export default Cart;

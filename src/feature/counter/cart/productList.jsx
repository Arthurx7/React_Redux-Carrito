import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 },
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch(addProduct({ ...product, quantity: 1 }))}>
              Añadir al Carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

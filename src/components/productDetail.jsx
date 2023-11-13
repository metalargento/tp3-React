import React from 'react';

const ProductDetail = ({ name, description, price, sku, quantity }) => {
  return (
    <div className = 'contenedor'>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad Disponible: {quantity}</p>
    </div>
  );
};

export default ProductDetail;
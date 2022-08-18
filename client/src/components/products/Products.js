import React from "react";
import "../../css/products/Products.css"

function Products(props) {
  return (
    <div className="product-wrapper">
      
      {props.products.map(product => (
        <div className="product-item" key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <div className="product-desc">
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
            <button>Add To Card</button>
        </div>
      ))}

    </div>
  );
}

export default Products;

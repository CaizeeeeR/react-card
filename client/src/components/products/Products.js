import React, { useState } from "react";
import "../../css/products/Products.css"
import ProductModal from "./ProductModal";

function Products(props) {

  const [Content, setContent] = useState("");

  const openModal = (Content) => {
    setContent(Content)
  }

  const closeModal = () => {
    setContent(false)
  }

  return (
    <div className="product-wrapper">
      
      {props.products.map(product => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
            <div className="product-desc">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <button onClick={()=> props.cartItem(product)}>Add To Card</button>
        </div>
      ))}

     <ProductModal goContent={Content} closeModal={closeModal} />

    </div>
  );
}

export default Products;

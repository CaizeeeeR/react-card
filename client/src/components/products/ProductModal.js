import React from 'react'
import Modal from "react-modal";

function ProductModal(props) {
    const {goContent, closeModal} = props;
  return (
    <Modal isOpen={goContent} onRequestClose={closeModal}>
    <span className="close-icon" onClick={closeModal}>&times;</span>
    <div className="product-info">
      <img src={goContent.imageUrl} alt={goContent.title} />
      <p>{goContent.title}</p>
      <p>{goContent.desc}</p>
      <p>${goContent.price}</p>
    </div> 
  </Modal>
  )
}

export default  ProductModal
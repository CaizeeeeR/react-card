import React from 'react'
import "../../css/Filter/Filter.css";

function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className='filter-title'>Filter</h2>
      <div className='num-of-products'>Number Of Product: {props.productsNumber}</div>
      <div className='filter-by-size'>
        <span>Filter</span>
        <select value={props.size} className='filter-select' onChange={props.handelBySize}>
            <option value="ALL">ALL</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
        </select>
      </div>
      <div className='filter-by-order'>
        <span>Order</span>
        <select value={props.sort} className='filter-select' onChange={props.handelByOrder}>
            <option value="lastest">Lastest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  )
}

export default  Filter
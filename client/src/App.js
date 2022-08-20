import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart.js";
import Filter from "./components/Filter/Filter.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Products from "./components/products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cardItems, setCardItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  const handelBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data)
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.sizes.indexOf(e.target.value) !== -1);
      setProducts(newProducts);
    }
  }

  const handelByOrder = (e) => {
    let order = e.target.value;
    setSort(e.target.value);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function(a,b) {
      if(order === "lowest") {
        return a.price - b.price
      } else if (order === "highest") {
        return b.price - a.price
      } else {
        return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProducts);
    
  }

  const addToCart = (products) => {
    const cartItemClone = [...cardItems];
    var isProductExist = false;
    cartItemClone.forEach(p => {
      if(p.id === products.id) {
        p.qty++;
        isProductExist= true;
      }
    })
    if(!isProductExist) {
      cartItemClone.push({...products, qty: 1})  
    }
    setCardItems(cartItemClone)
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cardItems))
  }, [cardItems])

  const removeFromCard = (products) => {
    const removeClone = [...cardItems];
    setCardItems(removeClone.filter(p => p.id != products.id))
  }

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} cartItem={addToCart} />
          <Filter 
            productsNumber = {products.length}
            handelBySize={handelBySize} 
            size={size} 
            handelByOrder={handelByOrder}
            sort={sort}
          />
        </div>
        <Cart cardItems={cardItems} remove={removeFromCard}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

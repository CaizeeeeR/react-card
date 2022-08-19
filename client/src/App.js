import React, { useState } from "react";
import Filter from "./components/Filter/Filter.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Products from "./components/products/Products";
// import { words } from "./wordsFile.js";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

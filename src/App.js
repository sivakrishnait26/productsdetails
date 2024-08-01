import React, { useState, useEffect } from "react";

import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul type="none">
          {products.map((product) => (
            <li key={product.id} className="product-card">
              <img className="product-image" src={product.image} />
              <div>
                <h1 className="heading">{product.title}</h1>
                <p>Price: {product.price}</p>
                <p className="description">{product.description}</p>
                <p className="description">Category: {product.category}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

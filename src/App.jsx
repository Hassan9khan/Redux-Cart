import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "./config/redux/reducers/cartSice";


const App = () => {
  
  const [products, setProducts] = useState([]);

  let selector = useSelector((state) => state.cart.cartItems);
  console.log(selector);
  let productArrayStr = JSON.string(selector);
  localStorage.setItem('products', productArrayStr);
  


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();

  function addToCart(item) {
    console.log(item);
    dispatch(
      addCartItem({
        item,
      })
    );
    
  }

  return (
    <>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {products ? (
          products.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid black",
                  padding: "15px",
                }}
              >
                <img width="200px" src={item.thumbnail} alt="image" />
                <h2>{item.title.slice(0, 15) + "..."}</h2>
                <p>Price: {item.price}</p>
                <p>Brand: {item.brand}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default App;

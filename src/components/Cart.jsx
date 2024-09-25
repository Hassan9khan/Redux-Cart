import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const selector = useSelector((state) => state.cart.cartItems);
  console.log(selector);

  let productsArrayStr = localStorage.getItem("products");

  let products;

  try {
    products = JSON.parse(productsArrayStr);
    console.log(products);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  

  return (
    <>
    <div style={{display: "flex", justifyContent: "between", flexWrap: "wrap"}}>
      {/* {selector ? selector.map((item) => {
        return(
            <div key={item.id} style={{
                border: "1px solid black",
                gap: "10px",
                padding: "10px",
                margin: "10px"
            }}> 
                <h2>{item.title}</h2>
                <p>Price: {item.price}</p>
            </div>
        )
      }) : <h1>Loading</h1>} */}
    </div>
    <div>
      {products ? products.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
          </div>
        )
      }) : <h1>Loading</h1>}
    </div>
    </>
  );
};

export default Cart;

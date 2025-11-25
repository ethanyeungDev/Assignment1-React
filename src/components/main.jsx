import { useState } from "react";
import Items from "./Items";
import Cart from "./cart";

function Main() {
  const [cart, setCart] = useState([]);

  const addItem = (newItem) => {
    setCart([...cart, newItem]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <Items addItem={addItem} />
      <Cart cartItems={cart} />
    </div>
  );
}

export default Main;

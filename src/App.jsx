import "./App.css";
import Items from "./components/Items";
import Cart from "./components/cart";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    console.log(`Added: ${item.name} (${item.quantity})`);
    setCart([...cart, item]);
  };
   const removeItem = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };


  return (
    <div id="root-container">
      <h1>Shopping Cart</h1>

      <div className="cards">
        <div className="card">
          <Items addItem={addItem} />
        </div>

        <div className="card">
          <Cart cartItems={cart} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default App;

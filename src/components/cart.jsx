import { useState } from "react";

function Cart({ cartItems, removeItem }) {
  const [selectedIndex, setSelectedIndex] = useState(null);


  const handleRemove = () => {
    if (selectedIndex !== null) {
      const item = cartItems[selectedIndex];
      console.log(`Removed: ${item.name} (${item.quantity})`);

      removeItem(selectedIndex);
      setSelectedIndex(null); 
    }
  };
  return (
    <div>
      <h2>Cart Items</h2>

      {cartItems.length === 0 && <p>No items added yet.</p>}

      {cartItems.map((item, index) => (
        <div key={index} className="cart-row">
          <input
            type="radio"
            name="selectedItem"
            onChange={() => setSelectedIndex(index)}
            checked={selectedIndex === index}
          />
      
         <div className="cart-name">{item.name} — {item.quantity}</div>
        </div>
   
          ))}

      <button
        style={{ marginTop: "120px", width: "90px" }}
        onClick={handleRemove}   
        disabled={selectedIndex === null}
      >
        Remove
      </button>
    </div>
  );
}

export default Cart;

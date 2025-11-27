import { useState } from "react";
import Quantity from "./Quantity"; 

function Items({ addItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem({ name: itemName, quantity: Number(quantity) });
  };

  return (
    <div>
      <h2>Add Item</h2>

      <label>Item Name:</label>
      <select value={itemName} onChange={(e) => setItemName(e.target.value)}>
        <option value="">--Select an item--</option>
        <option value="tomato">Tomato</option>
        <option value="potato">Potato</option>
        <option value="beans">Beans</option>
        <option value="onions">Onions</option>
        <option value="garlic">Garlic</option>
        <option value="peas">Peas</option>
      </select>

       <br /><br />

      <label>Quantity:</label>
      <Quantity onChange={setQuantity} />

      <br /><br />

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default Items;
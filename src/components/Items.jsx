import { useState } from "react";

function Items({ addItem }) {
  const [itemName, setItemName] = useState("Tomato");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem({
      name: itemName,
      quantity: Number(quantity)
    });
  };

  return (
    <div>
      <h2>Add Item</h2>

      <label>Item Name:</label>
      <select value={itemName} onChange={(e) => setItemName(e.target.value)}>
        <option value="tomatoes">Tomato</option>
        <option value="potatoes">Potato</option>
        <option value="beans">Beans</option>
        <option value="onions">Onions</option>
        <option value="garlic">Garlic</option>
        <option value="peas">Peas</option>
      </select>

      <br /><br />

      <label>Quantity:</label>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {[1,2,3,4,5,6,7,8,9,10].map(num => (
          <option key={num}>{num}</option>
        ))}
      </select>

      <br /><br />

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default Items;

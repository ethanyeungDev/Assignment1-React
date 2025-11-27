import { useState } from "react";

function Quantity({ onChange }) {
  const [qty, setQty] = useState(1);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setQty(value);
    onChange(value);   
  };

  return (
    <input
      type="number"
      min="1"
      value={qty}
      onChange={handleChange}
    />
  );
}

export default Quantity;

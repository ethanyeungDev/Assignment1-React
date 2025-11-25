import { useState } from "react";

export const Quantity = () => {
   const [count, setCount] = useState(1);

   
   return (
        <div className = 'qty'>
            <button className="change-qty" onClick={() =>setCount(count - 1)}>
                -
            </button>
            <p>Quantity: {count}</p>
            <button className="change-qty" onClick={() =>setCount(count + 1)}>
                +
            </button>
        </div>
        )   
}

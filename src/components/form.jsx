import { useState } from "react";

function Form() {
    // Use states for the cart items
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const [cartItems, setCartItems] = useState([]);

// Some error states that I've added
    const [nameError, setNameError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [quantityError, setQuantityError] = useState("");

    // function to prevent default form submission behavior
    function handleSubmit(e) {
        e.preventDefault();

        let isValid = true;

        // Reset values of error messages back to empty strings
        setNameError("");
        setPriceError("");
        setQuantityError("");

        // Form validation with error handling for missing items, price, or quantity
        if (!itemName.trim()) {
            setNameError("Item name is required.");
            isValid = false;
        }

        if (!price || Number(price) <= 0) {
            setPriceError("Price must be greater than 0.");
            isValid = false;
        }

        if (!quantity || Number(quantity) < 1) {
            setQuantityError("Quantity must be at least 1.");
            isValid = false;
        }

        if (!isValid) return;

        // Creates a new item object to add to the cart
        const newItem = {
            name: itemName,
            price: Number(price),
            quantity: Number(quantity),
        };

        setCartItems([...cartItems, newItem]);

         // Reset values of error messages back to empty strings
        setItemName("");
        setPrice("");
        setQuantity("");
    }

    return (
        <>
        {/* handleSubmit is common naming convention for form submission handlers */}
            <form onSubmit={handleSubmit} className="cart-form">
                <h2>Add Item to Cart</h2>

                {/*code block for item name with error handling*/}
                <label htmlFor="itemName" className="cart-label">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    className="cart-input"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                {nameError && <p className="error-message">{nameError}</p>}

                {/*code block for item price with error handling*/}
                <label htmlFor="price" className="cart-label">Price:</label>
                <input
                    type="number"
                    id="price"
                    className="cart-input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {priceError && <p className="error-message">{priceError}</p>}

                {/*code block for item quantity with error handling*/}
                <label htmlFor="quantity" className="cart-label">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    className="cart-input"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                {quantityError && <p className="error-message">{quantityError}</p>}

{/* button to submit the form, adding the specified item to cart */}
                <button type="submit" className="cart-button">
                    Add to Cart
                </button>
            </form>

{/*code block for the cart list once created (when cart list is greater than zero*/}
            {cartItems.length > 0 && (
                <section className="cart-list-section">
                    <h3>Cart Items:</h3>
                    <ul className="cart-list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-list-item">
                                <span>{item.name} — ${item.price} x {item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}

export default Form;


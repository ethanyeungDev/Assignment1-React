function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart Items</h2>

      <p>Total Items: {cartItems.length}</p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} — {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

const Cart = () => {
  const items = ["Wireless mouse", "Power Bank", "new ssd", "Hoddie"];
  return (
    <div>
      <h1> Cart </h1>
      {items.length > 0 && <h2>you have {items.length} item in your cart</h2>}
    </div>
  );
};
export default Cart;

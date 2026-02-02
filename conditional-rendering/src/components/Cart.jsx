const Cart = () => {
  const items = ["Wireless mouse", "Power Bank", "new ssd", "Hoddie"];
  return (
    <div>
      <h1> Cart </h1>
      {items.length > 0 && <h2>you have {items.length} item in your cart</h2>}
      <br />
      <div>
        {items.map((item, index) => (
          <ul>
            <li key={index}>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Cart;

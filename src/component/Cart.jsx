import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}.00</p>
              </div>

              {/* ✅ REMOVE BUTTON */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}.00</h3>
        </>
      )}

      <button
        className="continue-btn"
        onClick={() => navigate("/products")}
      >
        ← Continue Shopping
      </button>
    </div>
  );
};

export default Cart;

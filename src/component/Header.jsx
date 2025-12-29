import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        Homeza
      </div>

      <nav className="nav">
        <button className="nav-link-btn" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </button>

        <button className="nav-link-btn" onClick={() => navigate("/about")}>
          <i className="fa-solid fa-circle-info"></i>
          <span>About Us</span>
        </button>

        <button className="nav-link-btn" onClick={() => navigate("/products")}>
          <i className="fa-solid fa-couch"></i>
          <span>Products</span>
        </button>

        <button className="nav-link-btn" onClick={() => navigate("/contact")}>
          <i className="fa-solid fa-phone"></i>
          <span>Contact</span>
        </button>
         {/* CART ICON (SINGLE SOURCE OF TRUTH) */}
        <div className="header-cart" onClick={() => navigate("/cart")}>
          🛒
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </div>
      </nav>
    </header>
  );
};

export default Header;

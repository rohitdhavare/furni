import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import Header from "./Header";

/* IMAGES */
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product3.webp";
import product3 from "../assets/images/product4.jpg";
import product4 from "../assets/images/product5.webp";
import product5 from "../assets/images/product6.jpeg";
import product6 from "../assets/images/product7.jpeg";
import product7 from "../assets/images/product8.jpg";
import product8 from "../assets/images/product9.jpeg";

const Products = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Designer Metal Banquet Chair", category: "Dining", price: 799, oldPrice: 999, img: product1 },
    { id: 2, name: "Wooden Table in Margao", category: "Living", price: 1099, oldPrice: 1399, img: product2 },
    { id: 3, name: "Wakefit Mars Upholstered HeadBoard Storage Bed", category: "Bedroom", price: 699, oldPrice: 899, img: product3 },
    { id: 4, name: "Wakefit Campus Study Table", category: "Office", price: 799, oldPrice: 999, img: product4 },
    { id: 5, name: "Windsor Grey 7 Seater Sofa Set", category: "Living", price: 1199, oldPrice: 1499, img: product5 },
    { id: 6, name: "Rectangle Wooden Dining Table", category: "Dining", price: 649, oldPrice: 899, img: product6 },
    { id: 7, name: "Furniliving Velvet Accent Chair", category: "Office", price: 749, oldPrice: 999, img: product7 },
    { id: 8, name: "New Bedroom Furniture Designs to Give Your Space a Modern Touch", category: "Bedroom", price: 849, oldPrice: 1099, img: product8 },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* ✅ HEADER ADDED PROPERLY */}
      <Header />

      <div className="ux983-shop-wrapper">
        {/* SIDEBAR */}
        <aside className="ux983-filter-panel">
          <h4>Categories</h4>
          <ul className="ux983-category-list">
            {["All", "Bedroom", "Living", "Dining", "Office"].map((cat) => (
              <li
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "All" ? "All Products" : `${cat} Furniture`}
              </li>
            ))}
          </ul>
        </aside>

        {/* PRODUCTS */}
        <section className="ux983-product-area">
          <div className="ux983-product-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="ux983-product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="ux983-img-wrap">
                  <img src={product.img} alt={product.name} />

                  <div className="ux983-hover-actions">
                    <button
                      className="ux983-hover-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      🛒
                    </button>
                  </div>
                </div>

                <h5>{product.name}</h5>
                <p className="ux983-price">
                  ₹{product.price}.00 <span>₹{product.oldPrice}.00</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;

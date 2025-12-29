import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="logo">Homeza</div>

        <nav className="nav">
          <a href="#home">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </a>

          <button
            className="nav-link-btn"
            onClick={() => navigate("/about")}
          >
            <i className="fa-solid fa-circle-info"></i>
            <span>About Us</span>
          </button>

          {/* React Router navigation */}
          <button
            className="nav-link-btn"
            onClick={() => navigate("/products")}
          >
            <i className="fa-solid fa-couch"></i>
            <span>Products</span>
          </button>

          <a href="#wishlist">
            <i className="fa-solid fa-heart"></i>
            <span>Like</span>
          </a>

          <a href="#delivery">
            <i className="fa-solid fa-truck"></i>
            <span>Delivery</span>
          </a>

          <button
            className="nav-link-btn"
            onClick={() => navigate("/contact")}
          >
            <i className="fa-solid fa-phone"></i>
            <span>Contact</span>
          </button>
        </nav>
      </header>

      {/* ================= SLIDER ================= */}
      <Slider />
    </div>
  );
};

export default Home;

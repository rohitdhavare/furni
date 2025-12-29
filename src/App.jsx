import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Products from "./component/Products";
import ProductDetails from "./component/ProductDetails";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import About from "./component/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

import { useParams } from "react-router-dom";
import { useState } from "react";
import { productsData } from "../Data/productsData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <>
      {/* BREADCRUMB */}
      <div className="ux983-breadcrumb">
        All Products / {product.name}
      </div>

      {/* DETAILS */}
      <div className="ux983-details-wrapper">
        <div className="ux983-details-image">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="ux983-details-info">
          <h1>{product.name}</h1>

          <div className="ux983-rating">
            ★★★★☆ <span>(0 reviews)</span>
          </div>

          <p className="ux983-desc-title">Description:</p>
          <p className="ux983-desc">{product.description}</p>

          <h4 className="ux983-why-title">Why You'll Love It:</h4>
          <ul className="ux983-why-list">
            <li>✓ Premium Quality</li>
            <li>✓ Durable Material</li>
            <li>✓ Modern Design</li>
            <li>✓ Value for Money</li>
          </ul>

          <div className="ux983-price">
            ₹{product.price}.00 <span>₹{product.oldPrice}.00</span>
          </div>

          {/* QTY */}
          <div className="ux983-qty-box">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* ACTIONS */}
          <div className="ux983-action-row">
            <button className="ux983-add-cart">Add to cart</button>
            <button className="ux983-buy-now">Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

import React, { useEffect, useState } from "react";
import "../index.css"; // Ensure this CSS contains slider styles

const slidesData = [
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/035/163/136/small/ai-generated-a-cozy-living-room-with-a-sectional-couch-coffee-table-and-rug-perfect-for-relaxing-and-unwinding-the-sectional-couch-is-large-and-comfortable-photo.jpeg",
    text: "REFINE YOUR\nWith us, style starts at home",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/3d-rendering-modern-living-room-interior-design-concept_674881-1842.jpg",
    text: "MODERN\nDesigned for comfort, styled for you",
  },
  {
    image:
      "https://www.decorilla.com/online-decorating/wp-content/uploads/2023/07/Combined-living-and-dining-room-design-by-Decorilla.jpg",
    text: "EXPLORE\nLuxury Brands",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider">
      <div className="slides">
        {slidesData.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h1>{slide.text}</h1>
          </div>
        ))}
      </div>

      <div className="indicators">
        {slidesData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Styles */}
      <style>{`
        :root {
          --vulps-red: #B84433;
          --vulps-dark: #333333;
          --text-gray: #555555;
        }

        body { font-family: 'Poppins', sans-serif; }
        .about-header {
          background: var(--vulps-dark);
          color: white;
          padding: 40px 0;
          margin-bottom: 60px;
        }
        .about-header h1 { font-size: 32px; padding-left: 9%; }

        .container { max-width: 1140px; margin: auto; padding: 0 20px; }

        .section { display: flex; align-items: center; gap: 30px; padding: 50px 0; }
        .section.reverse { flex-direction: row-reverse; }

        .content { flex: 1; }
        .image-side { flex: 1; text-align: center; }

        .image-side img { 
          width: 100%; 
          max-width: 500px; 
          border-radius: 15px 150px 15px 150px; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.15); 
        }

        .label { font-weight: 700; margin-bottom: 6px; }
        h2 { font-size: 28px; margin-bottom: 12px; }
        p { color: var(--text-gray); font-size: 15px; line-height: 1.6; margin-bottom: 25px; }

        .btn-vulps {
          background: var(--vulps-red);
          color: white;
          padding: 10px 25px;
          text-decoration: none;
          border-radius: 5px;
          display: inline-block;
        }

        footer {
          background: linear-gradient(135deg, #E8C14D, #7E631C);
          padding: 80px 0 40px;
          margin-top: 100px;
        }

        .footer-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 50px; }
        .footer-links { list-style: none; font-size: 14px; }
        .footer-links li { margin-bottom: 10px; }
        .copyright { margin-top: 40px; border-top: 1px solid rgba(0,0,0,0.2); padding-top: 20px; font-size: 12px; }

        @media (max-width: 768px) { .section { flex-direction: column; text-align: center; } }
      `}</style>

      {/* Header */}
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      {/* Sections */}
      <div className="container">
        <section className="section" data-aos="fade-up">
          <div className="content">
            <p className="label">About Homeza</p>
            <h2>Elevate Your <strong>Space</strong></h2>
            <p>
              Homeza Furniture is a modern furniture brand dedicated to
              delivering stylish, high-quality, and affordable furniture
              that enhances comfort and elegance in every home.
            </p>
            <Link to="/" className="btn-vulps">Back to Home</Link>
          </div>
          <div className="image-side">
            <img
              src="https://cdn.shopify.com/s/files/1/0683/7338/1440/files/Living-and-dining_1_1_1100x_37ba253f-5f15-4840-bc84-a70d84709e35.jpg?v=1722403018"
              alt="Homeza Furniture"
            />
          </div>
        </section>

        <section className="section reverse" data-aos="fade-up">
          <div className="content">
            <h2>Our Story</h2>
            <p>
              Founded by a passionate team of four, Homeza was created to
              redefine modern living by blending craftsmanship, comfort,
              and contemporary design into furniture that transforms spaces.
            </p>
          </div>
          <div className="image-side">
            <img
              src="https://xclusiveinteriors.in/assets/img/portfolio/mahesh-narkhedkar/Mahesh-narkhedkar-thumbnail.jpg"
              alt="Our Story"
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer>
        <div className="container footer-grid">
          <div>
            <h4>Menu</h4>
            <ul className="footer-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li><i className="fa-solid fa-envelope"></i> homeza@gmail.com</li>
              <li><i className="fa-solid fa-phone"></i> +91 99********</li>
            </ul>
          </div>
        </div>

        <div className="container copyright">
          © Homeza Furniture
        </div>
      </footer>
    </>
  );
};

export default About;

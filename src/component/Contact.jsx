const Contact = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          background: #eaeaea;
        }

        .contact-main {
          width: 1100px;
          height: 600px;
          margin: 40px auto;
          display: flex;
          background: #fff;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        .contact-left {
          width: 45%;
          background: url("https://images.unsplash.com/photo-1503387762-592deb58ef4e")
            center/cover no-repeat;
          position: relative;
        }

        .contact-left::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.75);
        }

        .contact-left-content {
          position: relative;
          color: #fff;
          padding: 80px 50px;
        }

        .contact-item {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }

        .contact-icon {
          font-size: 20px;
        }

        .contact-item h4 {
          font-size: 15px;
          margin-bottom: 5px;
        }

        .contact-item p {
          font-size: 14px;
          color: #2ecc71;
        }

        .contact-right {
          width: 55%;
          padding: 60px 50px;
        }

        .contact-right h2 {
          margin-bottom: 35px;
          font-weight: 500;
        }

        form label {
          font-size: 12px;
          color: #888;
          margin: 18px 0 6px;
          display: block;
        }

        form input,
        form textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #eee;
          outline: none;
          font-size: 14px;
        }

        .contact-row {
          display: flex;
          gap: 15px;
        }

        textarea {
          height: 120px;
          resize: none;
        }

        button {
          margin-top: 25px;
          background: #2ecc71;
          color: #fff;
          border: none;
          padding: 12px 28px;
          font-weight: bold;
          cursor: pointer;
        }

        button:hover {
          background: #27ae60;
        }
      `}</style>

      <div className="contact-main">
        <div className="contact-left">
          <div className="contact-left-content">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>
                  Mada Center 8th floor, 379 Hudson St
                  <br />
                  New York, NY 10018 US
                </p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Let’s Talk</h4>
                <p>+1 800 1236879</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <h4>General Support</h4>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h2>Send Us A Message</h2>

          <form>
            <label>TELL US YOUR NAME *</label>
            <div className="contact-row">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>

            <label>ENTER YOUR EMAIL *</label>
            <input type="email" placeholder="example@email.com" required />

            <label>ENTER PHONE NUMBER</label>
            <input type="text" placeholder="+1 800 000000" />

            <label>MESSAGE *</label>
            <textarea placeholder="Write us a message" required />

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

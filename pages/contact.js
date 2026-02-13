import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de e-mail se desejar
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>CONTACT | creative.index</title>
      </Head>

      <main className="creative-profile-layout contact-layout">
        <div className="profile-info-column">
          <header className="profile-header">
            <h1 className="heading-secondary">Contact</h1>
            <div className="profile-meta">
              <p className="large-p">
                Get in touch for collaborations, archive inquiries, or just to
                say hello. Our team will get back to you as soon as possible.
              </p>
            </div>
          </header>

          <div className="contact-form-container">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-MAIL</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="hello@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  SEND MESSAGE <span className="btn-arrow">→</span>
                </button>
              </form>
            ) : (
              <div className="success-message reveal-text active">
                <h3 className="heading-quartiary">SENT SUCCESSFULLY.</h3>
                <p className="medium-p">
                  Thank you. We will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="back-btn"
                  style={{ marginTop: "2rem" }}
                >
                  SEND ANOTHER
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Lado direito mantém a estética visual (pode ser uma imagem fixa ou apenas cor) */}
        <div className="profile-image-column contact-visual">
          <img
            src="/imgs/Elegant Black Dress in Motion.png"
            alt="Contact Visual"
            className="designer-full-img"
          />
        </div>
      </main>
    </>
  );
}

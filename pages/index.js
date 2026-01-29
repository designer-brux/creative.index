import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import designersData from "../data/designers.json";
import maisonsData from "../data/maisons.json";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 1. Controle do Preloader via Session Storage
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");

    if (!hasSeenPreloader) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasSeenPreloader", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // 2. Lógica de Animação de Scroll
    if (!loading) {
      const observerOptions = { threshold: 0.15 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, observerOptions);

      const animatedElements = document.querySelectorAll(
        ".reveal-text, .img-reveal, .hero-img-animated",
      );
      animatedElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [loading]);

  // 3. Lógica de Cruzamento de Dados (Designers + Maisons)
  const combinedUpdates = [
    ...designersData.map((d) => ({ ...d, type: "creatives" })),
    ...maisonsData.map((m) => ({ ...m, type: "maisons" })),
  ];

  const latestUpdates = combinedUpdates
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 5);

  return (
    <>
      <Head>
        <title>creative.index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {loading && (
        <div id="preloader">
          <h1 className="loader-logo">creative.index</h1>
        </div>
      )}

      <main
        className={`container ${!loading ? "fade-in-content" : ""}`}
        style={{ opacity: loading ? 0 : 1 }}
      >
        <section className="hero">
          <div className="hero-text">
            <h2 className="heading-secondary reveal-text">
              Dive into the creative legacy of the world’s luxury maisons,
              tracing the visionaries who shaped style, culture, and identity.
            </h2>
          </div>
          <div className="hero-img hero-img-animated">
            <img
              src="/imgs/Elegant Woman Portrait.png"
              alt="Hero Portrait"
              className="img-reveal"
            />
          </div>
        </section>

        <section className="categories-section">
          <h2 className="heading-tertiary reveal-text">
            SEARCH BY <br />
            CATEGORIES
          </h2>
          <div className="categories-box">
            <Link href="/maisons" className="category-item">
              <span className="category-label label-left">by.maisons</span>
              <div className="category-img-wrapper">
                <img
                  src="/imgs/fernanda-garcia-QT07ANmTsU8-unsplash.jpg"
                  alt="Maisons"
                  className="category-img img-reveal"
                />
              </div>
            </Link>
            <Link href="/creatives" className="category-item">
              <span className="category-label label-right">by.creatives</span>
              <div className="category-img-wrapper">
                <img
                  src="/imgs/pexels-cottonbro-5582523.jpg"
                  alt="Creatives"
                  className="category-img img-reveal"
                />
              </div>
            </Link>
          </div>
        </section>

        <section className="updates-section">
          <div className="updates-image-box">
            <img
              src="/imgs/Elegant Black Dress in Motion.png"
              alt="Fashion Editorial"
              className="updates-img img-reveal"
            />
          </div>
          <section className="updates-content">
            <h2 className="heading-tertiary reveal-text">LATEST UPDATES</h2>

            <ul className="updates-list">
              {/* CORREÇÃO AQUI: Adicionado o .map() para renderizar a lista combinada */}
              {latestUpdates.map((item) => (
                <li
                  key={`${item.type}-${item.id}`}
                  className="update-item reveal-text"
                >
                  <Link
                    href={`/${item.type}/${item.slug}`}
                    className="update-link-wrapper"
                  >
                    <div className="update-info">
                      <h3 className="update-title">{item.name}</h3>
                      <p className="update-category">
                        {item.type === "maisons" ? `Maison` : item.role}
                      </p>
                    </div>
                    <span className="update-arrow">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>

      <style jsx>{`
        .fade-in-content {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

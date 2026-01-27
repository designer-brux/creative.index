import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import designersData from "../data/designers.json";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false); // Estado para o menu mobile

  useEffect(() => {
    // 1. Controle do Preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // 2. Lógica de Animação de Scroll (Intersection Observer)
    const observerOptions = {
      threshold: 0.15,
    };

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

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Função para alternar o menu
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <>
      <Head>
        <title>creative.index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4862f6187b.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>

      <div id="preloader" className={!loading ? "preloader-hidden" : ""}>
        <h1 className="loader-logo">creative.index</h1>
      </div>

      {/* A classe 'nav-open' é adicionada ao header se navOpen for true */}
      <header className={`header ${navOpen ? "nav-open" : ""}`}>
        <Link href="/" className="nav-logo">
          <div className="nav-brand">
            <h1 className="heading-primary">creative.index</h1>
          </div>
        </Link>

        <nav className="nav-header">
          {/* Ao clicar num link, fechamos o menu automaticamente */}
          <Link href="/maison" onClick={() => setNavOpen(false)}>
            by.maisons
          </Link>
          <Link href="/creatives" onClick={() => setNavOpen(false)}>
            by.creatives
          </Link>
          <Link href="/contact" onClick={() => setNavOpen(false)}>
            contact
          </Link>
        </nav>

        <button className="btn-mobile-nav" onClick={toggleNav}>
          {/* Ícones de Menu e Fechar (ajustados para a lógica do seu CSS) */}
          <i className="fa-solid fa-bars icon-mobile-nav"></i>
          <i className="fa-solid fa-xmark icon-mobile-nav"></i>
        </button>
      </header>

      <main className="container">
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
            <Link href="/maison" className="category-item">
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
              {designersData.map((item) => (
                <li key={item.id} className="update-item reveal-text">
                  <Link
                    href={`/creatives/${item.slug}`}
                    className="update-link-wrapper"
                  >
                    <div className="update-info">
                      <h3 className="update-title">{item.name}</h3>
                      <p className="update-category">{item.role}</p>
                    </div>
                    <span className="update-arrow">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">
          <Link href="/" className="logo-footer">
            <h1 className="heading-primary">creative.index</h1>
          </Link>
          <p className="small-p">
            All brand names and logos on creative.index are property of their
            owners.
          </p>
        </div>
        <nav className="nav-footer">
          <Link href="/maison">by.maisons</Link>
          <Link href="/creatives">by.creatives</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </footer>
    </>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import designersData from "../data/designers.json";
import maisonsData from "../data/maisons.json";

// 1. OTIMIZAÇÃO: Movemos a constante para fora do componente.
// Isso impede que o array seja recriado na memória a cada re-render do React.
const heroSlides = designersData.slice(0, 8).map((d) => ({
  image: d.image,
  name: d.name,
}));

const overlayWords = [
  "CREATIVE",
  "DESIGN",
  "VISIONARY",
  "IMPACT",
  "INNOVATION",
  "INFLUENCE",
  "COUTURE",
  "VISIONARY",
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. CONTROLE DO PRELOADER
  useEffect(() => {
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

  // 3. LÓGICA DO CARROSSEL (ROBUSTA)
  useEffect(() => {
    // RISCO MITIGADO: Não inicia o slide enquanto a tela de loading estiver ativa.
    if (loading) return;
    if (heroSlides.length === 0) return;

    // SOLUÇÃO: Usamos setTimeout atrelado ao estado atual.
    // Isso garante que o React limpe e recrie o timer perfeitamente a cada troca de foto.
    const timer = setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentSlide, loading]); // Dependências estritas.

  // 4. OBSERVER DE ANIMAÇÕES DE SCROLL
  useEffect(() => {
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
        ".reveal-text, .img-reveal, .update-item",
      );
      animatedElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [loading]);

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
        <section className="hero-modern">
          <div className="hero-centered-wrapper">
            <div className="hero-content-overlay">
              <span className="overlay-text left">WE ARE</span>
              <span
                key={currentSlide}
                className="overlay-text right fade-text-anim"
              >
                {overlayWords[currentSlide]}
              </span>
            </div>

            <div className="hero-slider-mask">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`hero-slide ${index === currentSlide ? "active" : ""}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="hero-img-masked"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hero-text-modern">
            <h2 className="massive-heading reveal-text">
              Dive into the creative legacy of the world’s luxury maisons,
              tracing the visionaries who shaped style, culture, and identity.
            </h2>
          </div>
        </section>

        {/* ... (O restante das sections categories-section e updates-section permanecem idênticas ao seu código original) ... */}

        <section className="categories-modern">
          {/* BLOCO 1: MAISONS (Alinhado à Esquerda) */}
          <Link href="/maisons" className="cat-modern-item">
            <div className="cat-text-wrapper">
              <span className="cat-label-small">EXPLORE ARCHIVE BY</span>
              <h2 className="cat-huge-text reveal-text">MAISONS</h2>
            </div>
            <div className="cat-img-floating right reveal-text">
              <img
                src="/imgs/fernanda-garcia-QT07ANmTsU8-unsplash.jpg"
                alt="Maisons"
                className="cat-img-fill"
              />
            </div>
          </Link>

          {/* BLOCO 2: CREATIVES (Alinhado à Direita) */}
          <Link href="/creatives" className="cat-modern-item">
            <div className="cat-img-floating left reveal-text">
              <img
                src="/imgs/pexels-cottonbro-5582523.jpg"
                alt="Creatives"
                className="cat-img-fill"
              />
            </div>
            <div className="cat-text-wrapper align-right">
              <span className="cat-label-small">MEET THE VISIONARIES</span>
              <h2 className="cat-huge-text reveal-text">CREATIVES</h2>
            </div>
          </Link>
        </section>

        <section className="updates-modern">
          <div className="updates-header">
            <h2 className="heading-tertiary reveal-text">LATEST UPDATES</h2>
            <p className="small-p reveal-text">
              CURATED RECENT ADDITIONS TO THE ARCHIVE
            </p>
          </div>

          <ul className="updates-modern-list">
            {latestUpdates.map((item) => (
              <li
                key={`${item.type}-${item.id}`}
                className="update-modern-item reveal-text"
              >
                <Link
                  href={`/${item.type}/${item.slug}`}
                  className="update-modern-link"
                >
                  <div className="update-main-info">
                    <h3 className="update-modern-title">{item.name}</h3>
                    <span className="update-type-tag">
                      {item.type === "maisons" ? "MAISON" : "CREATIVE"}
                    </span>
                  </div>

                  <div className="update-meta-info">
                    <span className="update-arrow">&rarr;</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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

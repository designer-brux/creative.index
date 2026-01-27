import Head from "next/head"; // ESSENCIAL: Importe o Head aqui
import Link from "next/link";
import designersData from "../data/designers.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>creative.index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* Scripts externos devem preferencialmente usar o componente Next/Script, mas mantemos assim para correção rápida */}
        <script
          src="https://kit.fontawesome.com/4862f6187b.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>

      {/* O Preloader pode ser um componente à parte, mas aqui está a estrutura básica */}
      <div id="preloader">
        <h1 className="loader-logo">creative.index</h1>
      </div>

      <header className="header">
        <Link href="/" className="nav-logo">
          <div className="nav-brand">
            <h1 className="heading-primary">creative.index</h1>
          </div>
        </Link>
        <nav className="nav-header">
          <Link href="/maison">by.maisons</Link>
          <Link href="/creatives">by.creatives</Link>
          <Link href="/contact">contact</Link>
        </nav>

        <button className="btn-mobile-nav">
          {/* Aqui você pode usar ícones de uma biblioteca como Lucide ou Heroicons */}
          <span className="icon-mobile-nav">Menu</span>
        </button>
      </header>

      <section className="container">
        {/* HERO SECTION */}
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

        {/* CATEGORIES SECTION */}
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

        {/* UPDATES SECTION */}
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
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <Link href="/" className="logo-footer">
            <h1 className="heading-primary">creative.index</h1>
          </Link>
          <p className="small-p">
            All brand names and logos on creative.index are property of their
            owners. This is an independent editorial project, not affiliated
            with any brand.
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

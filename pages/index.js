import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
      {/* HEADER */}
      <header className="header">
        <Link className="nav-logo" href="/">
          <div className="nav-brand">
            <h1 className="heading-primary">creative.index</h1>
            <p className="medium-p">
              Dive into the creative legacy of the world’s luxury maisons,
              tracing the visionaries who shaped style, culture, and identity.
            </p>
          </div>
        </Link>

        <nav className="nav-header">
          <Link href="/maison">by.maisons</Link>
          <Link href="/creatives">by.creatives</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </header>

      {/* BODY */}
      <main className="main">
        <Link className="large-btn" href="/maison">
          <div className="grid-item img1">
            <Image
              src="/laura-chouette-Y1Yjp0zY8ss-unsplash.jpg"
              alt="Imagem by.maisons"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="label-btn">
              <h2 className="heading-tertiary">by.maisons</h2>
            </div>
          </div>
        </Link>

        <Link className="large-btn" href="/creatives">
          <div className="grid-item img1">
            <Image
              src="/graphe-tween-AXqkhXom-K8-unsplash.jpg"
              alt="Imagem by.maisons"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="label-btn">
              <h2 className="heading-tertiary">by.creatives</h2>
            </div>
          </div>
        </Link>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <Link className="logo-footer" href="/">
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
    </section>
  );
}

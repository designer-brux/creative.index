import Header from "../components/header";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
      <Header />

      <main className="main">
        <Link href="/maison" className="large-btn">
          <div className="grid-item">
            <Image
              src="/imgs/laura-chouette-Y1Yjp0zY8ss-unsplash.jpg"
              alt="Luxury Maisons"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="label-btn">
              <h2 className="heading-tertiary">by.maisons</h2>
            </div>
          </div>
        </Link>

        <Link href="/creatives" className="large-btn">
          <div className="grid-item">
            <Image
              src="/imgs/graphe-tween-AXqkhXom-K8-unsplash.jpg"
              alt="Luxury Creatives"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="label-btn">
              <h2 className="heading-tertiary">by.creatives</h2>
            </div>
          </div>
        </Link>
      </main>

      <footer className="footer">
        <div className="footer-logo">
          <Link href="/" className="logo-footer">
            <h1 className="heading-primary">creative.index</h1>
          </Link>
          <p className="small-p">
            All brand names and logos on creative.index are property of their
            owners. This is an independent editorial project.
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

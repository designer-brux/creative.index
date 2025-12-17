import Header from "../components/header";
import Link from "next/link";

export default function Maison() {
  return (
    <section className="container">
      <Header />

      <main className="main-body">
        <div className="body-header">
          <Link href="/" className="back-btn">
            ← back
          </Link>
          <h2 className="heading-secondary">by.maisons</h2>
          <span className="large-p">
            Explore every maison’s creative timeline — a record of directors who
            turned vision into legacy across fashion’s history.
          </span>
        </div>
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

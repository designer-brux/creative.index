import Header from "../components/header";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="container">
      <Header />

      <main className="main-body">
        <div className="body-header">
          <Link href="/" className="back-btn">
            ← back
          </Link>
          <h2 className="heading-secondary">contact</h2>
          <span className="large-p">Do you have a message for us?</span>
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

import Link from "next/link";

export default function Contact() {
  return (
    <section className="container">
      <header className="header">
        <Link href="/" className="nav-logo">
          <div className="nav-brand">
            <h1 className="heading-primary">creative.index</h1>
            <p className="medium-p">
              Dive into the creative legacy of the world’s luxury maisons.
            </p>
          </div>
        </Link>

        <nav className="nav-header">
          <Link href="/maison">by.maisons</Link>
          <Link href="/creatives">by.creatives</Link>
          <Link href="/contact">contact</Link>
        </nav>
      </header>

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
        </div>
      </footer>
    </section>
  );
}

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${menuOpen ? "nav-open" : ""}`}>
      <Link href="/" className="nav-logo">
        <div className="nav-brand">
          <h1 className="heading-primary">creative.index</h1>
          <p className="medium-p">
            Dive into the creative legacy of the world’s luxury maisons.
          </p>
        </div>
      </Link>

      <nav className="nav-header">
        <Link href="/maison" onClick={() => setMenuOpen(false)}>
          by.maisons
        </Link>
        <Link href="/creatives" onClick={() => setMenuOpen(false)}>
          by.creatives
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          contact
        </Link>
      </nav>

      <button
        className="btn-mobile-nav"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="icon-mobile-nav">{menuOpen ? "✕" : "☰"}</span>
      </button>
    </header>
  );
}

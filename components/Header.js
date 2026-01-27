import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <Link href="/" className="nav-logo">
        <div className="nav-brand">
          <h1 className="heading-primary">creative.index</h1>
        </div>
      </Link>

      <nav className="nav-header">
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
        <i className="fa-solid fa-bars icon-mobile-nav"></i>
        <i className="fa-solid fa-xmark icon-mobile-nav"></i>
      </button>
    </header>
  );
}

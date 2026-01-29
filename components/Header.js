import Link from "next/link";
import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  const handleNavClick = (category) => {
    setNavOpen(false);
    sendGAEvent({
      event: "nav_click", // Nome padronizado
      location: "header", // Parâmetro de localização
      label: category, // Nome do botão
    });
  };

  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <Link href="/" className="nav-logo">
        <div className="nav-brand">
          <h1 className="heading-primary">creative.index</h1>
        </div>
      </Link>

      <nav className="nav-header">
        <Link href="/maisons" onClick={() => handleNavClick("by_maisons")}>
          by.maisons
        </Link>
        <Link href="/creatives" onClick={() => handleNavClick("by_creatives")}>
          by.creatives
        </Link>
        <Link href="/contact" onClick={() => handleNavClick("contact")}>
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

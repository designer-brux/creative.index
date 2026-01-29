import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

export default function Footer() {
  const trackFooterClick = (label) => {
    sendGAEvent({
      event: "nav_click", // Mesmo nome do Header
      location: "footer", // Diferencia de onde veio o clique
      label: label,
    });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <Link href="/" className="logo-footer">
          <h1 className="heading-primary">creative.index</h1>
        </Link>
      </div>
      <div className="footer-socials">
        <a
          href="https://instagram.com/seu-perfil"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a
          href="https://tiktok.com/@seu-perfil"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
          </svg>
        </a>
      </div>
      <nav className="nav-footer">
        <Link href="/maisons" onClick={() => trackFooterClick("by_maisons")}>
          by.maisons
        </Link>
        <Link
          href="/creatives"
          onClick={() => trackFooterClick("by_creatives")}
        >
          by.creatives
        </Link>
        <Link href="/contact" onClick={() => trackFooterClick("contact")}>
          contact
        </Link>
      </nav>
      <div className="footer-text">
        <p className="small-p">
          All brand names and logos on creative.index are property of their
          owners. This is an independent editorial project, not affiliated with
          any brand.
        </p>
      </div>
    </footer>
  );
}

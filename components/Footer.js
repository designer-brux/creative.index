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
        <p className="small-p">
          All brand names and logos on creative.index are property of their
          owners.
        </p>
      </div>
      <nav className="nav-footer">
        <Link href="/maison" onClick={() => trackFooterClick("by_maisons")}>
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
    </footer>
  );
}

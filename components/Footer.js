import Link from "next/link";

export default function Footer() {
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
        <Link href="/maison">by.maisons</Link>
        <Link href="/creatives">by.creatives</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </footer>
  );
}

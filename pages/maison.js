import Link from "next/link";

export default function Maison() {
  return (
    <section className="container">
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
    </section>
  );
}

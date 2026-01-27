import Link from "next/link";

export default function Creatives() {
  return (
    <section className="container">
      <main className="main-body">
        <div className="body-header">
          <Link href="/" className="back-btn">
            ← back
          </Link>
          <h2 className="heading-secondary">by.creatives</h2>
          <span className="large-p">
            Dive into the timelines of creative directors who shaped fashion
            history.
          </span>
        </div>
      </main>
    </section>
  );
}

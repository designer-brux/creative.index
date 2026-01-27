import Link from "next/link";

export default function Contact() {
  return (
    <section className="container">
      <main className="main-body">
        <div className="body-header">
          <Link href="/" className="back-btn">
            ← back
          </Link>
          <h2 className="heading-secondary">contact</h2>
          <span className="large-p">Do you have a message for us?</span>
        </div>
      </main>
    </section>
  );
}

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import designers from "../../data/designers.json";

export default function CreativeProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const designer = designers.find((d) => d.slug === slug);

  if (!designer)
    return (
      <div className="container" style={{ paddingTop: "12rem" }}>
        Creative not found.
      </div>
    );

  return (
    <>
      <Head>
        <title>{designer.name} | creative.index</title>
      </Head>

      <section className="creative-profile-layout">
        {/* LADO ESQUERDO: CONTEÚDO (SCROLL) */}
        <div className="profile-info-column">
          <button onClick={() => router.back()} className="back-btn">
            <span className="back-arrow">&larr;</span> back
          </button>

          <header className="profile-header">
            <h1 className="profile-name">
              {designer["name"] || designer.name}
            </h1>

            <div className="profile-meta">
              <p>
                <strong>Full Name:</strong> {designer["full-name"]}
              </p>
              <p>
                <strong>Born:</strong> {designer["born-at"]}
              </p>
              <p>
                <strong>Where:</strong> {designer["born-in"]}
              </p>
              {designer["social-media"] && (
                <p>
                  <strong>Social media:</strong>
                  {/* Se for um Array (caso do Demna) */}
                  {Array.isArray(designer["social-media"]) ? (
                    designer["social-media"].map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                      >
                        {link.platform}
                      </a>
                    ))
                  ) : (
                    /* Se for uma String direta (caso dos outros) */
                    <a
                      href={designer["social-media"]}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      Instagram
                    </a>
                  )}
                </p>
              )}
            </div>
          </header>

          <div className="timeline-section">
            <h2 className="timeline-title">Career path</h2>
            <div className="timeline-list">
              {designer.career &&
                designer.career.map((job, index) => (
                  <Link
                    href={`/maisons/${job.slug}`}
                    key={index}
                    className="timeline-card"
                  >
                    <div className="card-main">
                      <h3 className="card-maison">{job.maison}</h3>
                      <span className="card-period">{job.period}</span>
                    </div>
                    <span className="card-arrow">&rarr;</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* LADO DIREITO: IMAGEM (FIXA) */}
        <div className="profile-image-column">
          <img
            src={designer.image}
            alt={designer.name}
            className="designer-full-img"
          />
        </div>
      </section>
    </>
  );
}

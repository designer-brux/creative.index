import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import maisons from "../../data/maisons.json";
import designers from "../../data/designers.json";

export default function MaisonProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const maison = maisons.find((m) => m.slug === slug);

  // Filtra designers que trabalharam nesta maison cruzando os dados
  const associatedDesigners = designers.filter((designer) =>
    designer.career?.some((job) => job.slug === slug),
  );

  if (!maison)
    return (
      <div className="container" style={{ paddingTop: "12rem" }}>
        Maison not found.
      </div>
    );

  return (
    <>
      <Head>
        <title>{maison.name} | creative.index</title>
      </Head>

      <section className="creative-profile-layout">
        <div className="profile-info-column">
          <button onClick={() => router.back()} className="back-btn">
            <span className="back-arrow">&larr;</span> back
          </button>

          <header className="profile-header">
            <h1 className="profile-name">{maison.name}</h1>
            <div className="profile-meta">
              <p>
                <strong>Founded:</strong> {maison.founded}
              </p>
              <p>
                <strong>Origin:</strong> {maison.origin}
              </p>
              <p>
                <strong>Website:</strong>
                <a
                  href={maison.website}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {maison.website
                    .replace("https://", "")
                    .replace("www.", "")
                    .replace("/", "")}
                </a>
              </p>
              <p>
                <strong>Social media:</strong>
                {/* Se for um Array (caso do Demna) */}
                {Array.isArray(maison["social-media"]) ? (
                  maison["social-media"].map((link, i) => (
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
                  <a
                    href={maison["social-media"]}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    Instagram
                  </a>
                )}
              </p>
            </div>
          </header>

          <div className="timeline-section">
            <h2 className="timeline-title">Creative History</h2>
            <div className="timeline-list">
              {associatedDesigners.length > 0 ? (
                associatedDesigners.map((designer, index) => {
                  // Busca o período específico que este designer trabalhou nesta maison
                  const jobInfo = designer.career.find((j) => j.slug === slug);

                  return (
                    <Link
                      href={`/creatives/${designer.slug}`}
                      key={index}
                      className="timeline-card"
                    >
                      <div className="card-main">
                        <h3 className="card-maison">{designer.name}</h3>
                        <span className="card-period">{jobInfo?.period}</span>
                      </div>
                      <span className="card-arrow">&rarr;</span>
                    </Link>
                  );
                })
              ) : (
                <p
                  className="medium-p"
                  style={{ paddingTop: "2rem", color: "#666" }}
                >
                  No creative history recorded yet.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="profile-image-column">
          <img
            src={maison.image}
            alt={maison.name}
            className="designer-full-img"
          />
        </div>
      </section>
    </>
  );
}

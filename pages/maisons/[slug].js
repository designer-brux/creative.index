import { useRouter } from "next/router";
import Head from "next/head";
import maisons from "../../data/maisons.json";

export default function MaisonProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const maison = maisons.find((m) => m.slug === slug);

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

      <section
        className="container"
        style={{ paddingTop: "12rem", minHeight: "100vh" }}
      >
        <div className="body-title">
          <h2 className="heading-secondary">{maison.name}</h2>
          <p className="medium-p" style={{ marginTop: "1rem", color: "#666" }}>
            Founded in {maison.origin}, {maison.founded}. <br />
            Current Creative Direction:{" "}
            <strong>{maison.current_creative}</strong>
          </p>
        </div>

        <div
          className="timeline-placeholder"
          style={{
            marginTop: "6rem",
            borderTop: "1px solid #1a1a1a",
            paddingTop: "4rem",
          }}
        >
          <p className="large-p">Archive and heritage timeline coming soon.</p>
        </div>
      </section>
    </>
  );
}

import { useRouter } from "next/router";
import Head from "next/head";
import designers from "../../data/designers.json";

export default function CreativeProfile() {
  const router = useRouter();
  const { slug } = router.query;

  // Busca o designer no JSON que tenha o mesmo slug da URL
  const designer = designers.find((d) => d.slug === slug);

  if (!designer) {
    return (
      <div className="container" style={{ paddingTop: "12rem" }}>
        Creative not found.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{designer["full-name"]} | creative.index</title>
      </Head>

      <section
        className="container"
        style={{ paddingTop: "4rem", minHeight: "100vh" }}
      >
        <div className="body-title">
          <h2 className="heading-secondary">{designer["full-name"]}</h2>
          <p className="medium-p" style={{ marginTop: "1rem", color: "#666" }}>
            {designer.role} — Born in {designer["born-in"]},{" "}
            {designer["born-at"]}
          </p>
        </div>

        <div
          style={{
            marginTop: "4rem",
            borderTop: "1px solid #1a1a1a",
            paddingTop: "2rem",
          }}
        >
          <span className="small-p" style={{ color: "#1a1a1a" }}>
            Last update: {designer.updatedAt}
          </span>
          {/* Aqui você entrará com o conteúdo específico da timeline no futuro */}
        </div>
      </section>
    </>
  );
}

import { useRouter } from "next/router";
import designersData from "../../data/designers.json";
import Link from "next/link";

export default function DesignerProfile() {
  const router = useRouter();
  const { slug } = router.query;

  // Busca o designer no JSON que tenha o mesmo slug da URL
  const designer = designersData.find((d) => d.slug === slug);

  // Caso o Next.js ainda esteja carregando ou não encontre o designer
  if (!designer)
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="main-body">
      <header className="body-header">
        <Link href="/" className="back-btn">
          <span>&larr;</span> Back to Index
        </Link>

        <h2 className="heading-secondary">{designer.name}</h2>
        <p className="large-p">{designer.role}</p>
      </header>

      <section className="container">
        {/* Aqui você pode adicionar mais campos ao seu JSON como 'bio', 'history', etc */}
        <div className="reveal-text active">
          <p className="medium-p">
            Creative legacy and history of {designer.name}...
          </p>
        </div>
      </section>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import maisons from "../data/maisons.json";

export default function Maisons() {
  const [hoveredMaison, setHoveredMaison] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [searchTerm, setSearchTerm] = useState("");

  // ADICIONE ESTE ESTADO AQUI:
  const [filterType, setFilterType] = useState("name");

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // LÓGICA DE FILTRO ATUALIZADA:
  const filteredMaisons = maisons.filter((m) => {
    const valueToSearch = filterType === "name" ? m.name : m.origin;
    return valueToSearch.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>by.maisons | creative.index</title>
      </Head>

      <section className="container">
        <div className="body-content">
          <div className="body-title">
            <h2 className="heading-secondary">by.maisons</h2>
            <span className="large-p">
              The heritage and evolution of the world's most prestigious fashion
              houses.
            </span>
          </div>

          <div className="search-container">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder={`Search by ${filterType === "name" ? "maison" : "country"}...`}
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* ADICIONE ESTE SELECT AQUI: */}
              <select
                className="filter-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="origin">Country</option>
              </select>
            </div>

            <span className="results-count">
              {filteredMaisons.length} houses listed
            </span>
          </div>

          <div className="body-cards">
            <ul className="cards-list">
              {filteredMaisons.map((maison) => (
                <li
                  key={maison.id}
                  className="update-item"
                  onMouseEnter={() => setHoveredMaison(maison)}
                  onMouseLeave={() => setHoveredMaison(null)}
                >
                  <Link
                    href={`/maisons/${maison.slug}`}
                    className="update-link-wrapper"
                  >
                    <div className="update-info">
                      <h3 className="update-title">{maison.name}</h3>
                      <span className="update-category">{maison.origin}</span>
                    </div>
                    <span className="update-arrow">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {hoveredMaison && (
        <div
          className="hover-preview"
          style={{ left: `${mousePos.x + 20}px`, top: `${mousePos.y + 20}px` }}
        >
          <img src={hoveredMaison.image} alt={hoveredMaison.name} />
          <span className="image-credit">
            Source: {hoveredMaison.image_credit}
          </span>
        </div>
      )}
    </>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import designers from "../data/designers.json";

export default function Creatives() {
  const [hoveredDesigner, setHoveredDesigner] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("name");

  useEffect(() => {
    const savedSearch = sessionStorage.getItem("creativesSearch");
    const savedFilter = sessionStorage.getItem("creativesFilter");
    if (savedSearch) setSearchTerm(savedSearch);
    if (savedFilter) setFilterType(savedFilter);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    sessionStorage.setItem("creativesSearch", value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    sessionStorage.setItem("creativesSearch", "");
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterType(value);
    sessionStorage.setItem("creativesFilter", value);
  };

  const filteredDesigners = designers.filter((designer) => {
    const valueToSearch = designer[filterType]?.toLowerCase() || "";
    return valueToSearch.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>by.creatives | creative.index</title>
      </Head>

      <section className="container" style={{ minHeight: "100vh" }}>
        <div className="body-content">
          <div className="body-title">
            <h2 className="heading-secondary">by.creatives</h2>
            <span className="large-p">
              Dive into the timelines of creative directors who shaped fashion
              history.
            </span>
          </div>

          <div className="search-container">
            <div className="search-wrapper">
              {/* Ícone de Limpar (X) condicional */}
              <div className="search-input-box">
                {searchTerm && (
                  <button
                    className="clear-search-btn"
                    onClick={clearSearch}
                    title="Clear search"
                  >
                    &times;
                  </button>
                )}
                <input
                  type="text"
                  placeholder={`Search by ${filterType === "name" ? "name" : "country"}...`}
                  className="search-input"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <select
                className="filter-select"
                value={filterType}
                onChange={handleFilterChange}
              >
                <option value="name">Name</option>
                <option value="born-in">Country</option>
              </select>
            </div>
            <span className="results-count">
              {filteredDesigners.length} results found
            </span>
          </div>

          <div className="body-cards">
            <ul className="cards-list">
              {filteredDesigners.map((designer) => (
                <li
                  key={designer.id}
                  className="update-item"
                  onMouseEnter={() => setHoveredDesigner(designer)}
                  onMouseLeave={() => setHoveredDesigner(null)}
                >
                  <Link
                    href={`/creatives/${designer.slug}`}
                    className="update-link-wrapper"
                  >
                    <div className="update-info">
                      <h3 className="update-title">{designer.name}</h3>
                      <span className="update-category">
                        {designer["born-in"]}
                      </span>
                    </div>
                    <span className="update-arrow">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
            {filteredDesigners.length === 0 && (
              <p className="no-results">
                No designers found matching your search.
              </p>
            )}
          </div>
        </div>
      </section>

      {hoveredDesigner && (
        <div
          className="hover-preview"
          style={{ left: `${mousePos.x + 20}px`, top: `${mousePos.y + 20}px` }}
        >
          <img src={hoveredDesigner.image} alt={hoveredDesigner.name} />
          {hoveredDesigner.image_credit && (
            <span className="image-credit">
              Photo: {hoveredDesigner.image_credit}
            </span>
          )}
        </div>
      )}
    </>
  );
}

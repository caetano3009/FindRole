/*
 * FindRolês — Home Page
 * Design: Swiss/International + Zine Underground ("Nota de Rodapé")
 * Layout: Dense list table + side drawer for details
 * Fonts: Syne (headers) + IBM Plex Mono (body)
 * Palette: Off-white #FAFAF7, Near-black #111, Moss green #2D5A27
 */

import { useState, useMemo } from "react";
import { places, categories, categoryColors, type Place, type Category } from "@/lib/places";
import { X, ExternalLink, MapPin, ArrowUpRight, Train } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "Todos">("Todos");
  const [search, setSearch] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const filtered = useMemo(() => {
    return places.filter((p) => {
      const matchCat = selectedCategory === "Todos" || p.category === selectedCategory;
      const matchSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.neighborhood.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, search]);

  const priceLabel = (price: string) => {
    if (price === "$") return "até R$30";
    if (price === "$$") return "R$30–80";
    return "acima R$80";
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Header */}
      <header style={{ borderBottom: "2px solid var(--foreground)", padding: "2rem 0 1.25rem" }}>
        <div className="container">
          {/* Top row */}
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--foreground)",
                }}
              >
                FindRolês
              </h1>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "var(--muted-foreground)",
                  marginTop: "6px",
                  letterSpacing: "0.04em",
                }}
              >
                {places.length} lugares salvos · São Paulo
              </p>
            </div>

            {/* Search */}
            <input
              className="search-input"
              type="text"
              placeholder="buscar lugar, bairro ou tipo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap" style={{ marginTop: "1rem" }}>
            <button
              className={`filter-chip ${selectedCategory === "Todos" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Todos")}
            >
              todos ({places.length})
            </button>
            {categories.map((cat) => {
              const count = places.filter((p) => p.category === cat).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  className={`filter-chip ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.toLowerCase()} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Table */}
      <main className="container" style={{ paddingTop: "0", paddingBottom: "5rem" }}>
        {/* Column headers */}
        <div
          className="table-header"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 0.5fr",
            padding: "10px 0",
            borderBottom: "1px solid var(--border)",
            fontFamily: "'Syne', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            marginTop: "2px",
          }}
        >
          <span>Lugar</span>
          <span>Bairro</span>
          <span>Tipo</span>
          <span style={{ textAlign: "right" }}>Preço</span>
        </div>

        {/* Rows */}
        {filtered.length === 0 ? (
          <div
            style={{
              padding: "4rem 0",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: "var(--muted-foreground)",
            }}
          >
            nenhum lugar encontrado.
          </div>
        ) : (
          filtered.map((place, idx) => (
            <div
              key={place.id}
              className="place-row"
              onClick={() => setSelectedPlace(place)}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 0.5fr",
                padding: "13px 0",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {/* Name */}
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "10px",
                    color: "var(--muted-foreground)",
                    minWidth: "22px",
                    opacity: 0.4,
                    flexShrink: 0,
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "-0.01em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {place.name}
                </span>
              </div>

              {/* Neighborhood */}
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "var(--muted-foreground)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {place.neighborhood}
              </span>

              {/* Category */}
              <div>
                <span
                  className="cat-tag"
                  style={{
                    color: categoryColors[place.category],
                    borderColor: categoryColors[place.category],
                  }}
                >
                  {place.category}
                </span>
              </div>

              {/* Price */}
              <div style={{ textAlign: "right" }}>
                <span className="price-indicator">{place.price}</span>
              </div>
            </div>
          ))
        )}

        {/* Footer count */}
        {filtered.length > 0 && (
          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border)",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              color: "var(--muted-foreground)",
              letterSpacing: "0.05em",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>mostrando {filtered.length} de {places.length} lugares</span>
            <span style={{ opacity: 0.4 }}>clique para ver detalhes →</span>
          </div>
        )}
      </main>

      {/* Drawer Overlay */}
      {selectedPlace && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setSelectedPlace(null)}
          />
          <aside className="drawer-panel">
            <div style={{ padding: "2rem" }}>
              {/* Close button */}
              <button
                onClick={() => setSelectedPlace(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--muted-foreground)",
                  background: "none",
                  border: "none",
                  padding: 0,
                  marginBottom: "2.5rem",
                  cursor: "pointer",
                }}
              >
                <X size={13} />
                Fechar
              </button>

              {/* Category tag */}
              <div style={{ marginBottom: "0.75rem" }}>
                <span
                  className="cat-tag"
                  style={{
                    color: categoryColors[selectedPlace.category],
                    borderColor: categoryColors[selectedPlace.category],
                  }}
                >
                  {selectedPlace.category}
                </span>
              </div>

              {/* Name */}
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                {selectedPlace.name}
              </h2>

              {/* Neighborhood + Price */}
              <div
                className="flex items-center gap-3 flex-wrap"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "var(--muted-foreground)",
                  marginBottom: "1.5rem",
                }}
              >
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {selectedPlace.neighborhood}
                </span>
                <span>·</span>
                <span>
                  <span className="price-indicator">{selectedPlace.price}</span>
                  {" "}— {priceLabel(selectedPlace.price)}
                </span>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid var(--border)", marginBottom: "1.5rem" }} />

              {/* Description */}
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px",
                  lineHeight: 1.75,
                  color: "var(--foreground)",
                  marginBottom: "1.25rem",
                }}
              >
                {selectedPlace.description}
              </p>

              {/* Tip */}
              {selectedPlace.tip && (
                <div
                  style={{
                    background: "var(--moss-light)",
                    border: "1px solid var(--moss)",
                    borderRadius: "2px",
                    padding: "12px 14px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "11px",
                      lineHeight: 1.65,
                      color: "var(--moss)",
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>dica:</strong>{" "}
                    {selectedPlace.tip}
                  </p>
                </div>
              )}

              {/* Transport */}
              {selectedPlace.transport && (
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "11px",
                    color: "var(--muted-foreground)",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                  }}
                >
                  <Train size={12} style={{ marginTop: "1px", flexShrink: 0, opacity: 0.6 }} />
                  <span>{selectedPlace.transport}</span>
                </div>
              )}

              {/* Divider */}
              <div style={{ borderTop: "1px solid var(--border)", marginBottom: "1.5rem" }} />

              {/* Source link */}
              <a
                href={selectedPlace.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--moss)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--moss)",
                  paddingBottom: "2px",
                  transition: "opacity 120ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Ver fonte original
                <ArrowUpRight size={12} />
              </a>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}

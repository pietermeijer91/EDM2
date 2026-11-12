/** Zijpaneel met ARTie (Copilot Studio). */
export default function ArtiePanel({ view }) {
  return (
    <>
      {view.artie.open ? (
        <>
          <div style={{ position: "fixed", inset: "0", zIndex: "900", background: "rgba(14, 26, 63, 0.35)" }} onClick={view.artie.close} />
          <aside role="dialog" aria-modal="true" aria-label="ARTie" style={{ position: "fixed", top: "0", right: "0", bottom: "0", zIndex: "901", width: "min(460px, 100vw)", display: "flex", flexDirection: "column", background: "#FFFFFF", boxShadow: "-12px 0 40px rgba(14, 26, 63, 0.25)", fontFamily: "Poppins, 'Segoe UI', sans-serif" }}>
            <div style={{ padding: "16px 18px", display: "flex", alignItems: "center", gap: "12px", background: "#1B2A5C", color: "#FFFFFF" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "#F39200", flexShrink: "0" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                  <rect x="3" y="6" width="16" height="12" rx="3" fill="#2B1A00" />
                  <circle cx="8" cy="12" r="1.8" fill="#F39200" />
                  <circle cx="14" cy="12" r="1.8" fill="#F39200" />
                  <path d="M11 6V2" stroke="#2B1A00" strokeWidth="2" />
                  <circle cx="11" cy="2" r="1.5" fill="#2B1A00" />
                </svg>
              </span>
              {" "}
              <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "17px", fontWeight: "700" }}>ARTie</span>
                <span style={{ fontSize: "12px", color: "#C9D3E6" }}>Jouw WoW-assistent · antwoorden op basis van het Delivery Model</span>
              </span>
              {" "}
              <button aria-label="Sluit ARTie" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "0", borderRadius: "50%", background: "rgba(255, 255, 255, 0.12)", cursor: "pointer" }} onClick={view.artie.close}>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {view.artie.hasQ ? (
              <>
                <div style={{ padding: "10px 18px", background: "#FFF8EC", borderBottom: "1px solid #F3DDB5", fontSize: "13px", lineHeight: "1.5", color: "#5A3A00" }}>
                  Je vraag{" "}
                  <strong>‘{view.artie.q}’</strong>
                  {" "}staat op je klembord. Plak hem in het gesprek (Ctrl+V).
                </div>
              </>
            ) : null}
            {view.artie.hasEmbed ? (
              <>
                <iframe title="ARTie chat" src={view.artie.embed} style={{ flex: "1", width: "100%", border: "0" }} />
              </>
            ) : null}
            {view.artie.noEmbed ? (
              <>
                <div style={{ flex: "1", padding: "24px 22px", display: "flex", flexDirection: "column", gap: "14px", overflow: "auto" }}>
                  <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C" }}>ARTie wordt hier gekoppeld</span>
                  {" "}
                  <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#3E4A63" }}>
                    Zodra de Copilot Studio-link van ARTie is ingesteld, voer je het gesprek hier direct naast de Big Picture. Tot die tijd vind je via de zoekbalk bovenaan snel het juiste onderdeel.
                  </span>
                  {" "}
                  <a href={view.artieUrl} target="_blank" rel="noopener" style={{ alignSelf: "flex-start", minHeight: "44px", padding: "0 20px", display: "flex", alignItems: "center", borderRadius: "22px", background: "#F39200", color: "#2B1A00", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
                    Open ARTie in een nieuw venster
                  </a>
                </div>
              </>
            ) : null}
          </aside>
        </>
      ) : null}
    </>
  );
}

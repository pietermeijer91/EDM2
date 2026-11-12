/** Pagina-onderdeel voor concepts (bovenaan, over de volle breedte). */
export default function ConceptenWachtwoord({ view }) {
  return (
    <>
      {view.lock.showConceptsLock ? (
        <>
          <form onSubmit={view.lock.submit} style={{ padding: "24px 26px", borderRadius: "16px", border: "2px solid #D5DBE5", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "520px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "700", color: "#1B2A5C" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="10" width="16" height="11" rx="2" fill="none" stroke="#1B2A5C" strokeWidth="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="#1B2A5C" strokeWidth="2" />
              </svg>
              Alleen voor reviewers
            </span>
            {" "}
            <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3E4A63" }}>
              Concepten zijn nog niet vastgesteld. Vul het wachtwoord in om ze te lezen.
            </span>
            {" "}
            <span style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <input id="edm-pw" type="password" autoComplete="off" aria-label="Wachtwoord" placeholder="Wachtwoord" style={{ flex: "1", minWidth: "180px", minHeight: "44px", padding: "0 14px", border: "1.5px solid #C9D1DD", borderRadius: "10px", fontFamily: "inherit", fontSize: "15px", color: "#1B2A5C", background: "#FFFFFF" }} />
              {" "}
              <button type="submit" style={{ minHeight: "44px", padding: "0 18px", border: "0", borderRadius: "22px", background: view.navy, color: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "700" }}>
                Ontgrendel
              </button>
            </span>
            {view.lock.err ? (
              <>
                <span role="alert" style={{ fontSize: "13px", fontWeight: "700", color: "#C8102E" }}>Onjuist wachtwoord, probeer het opnieuw.</span>
              </>
            ) : null}
          </form>
        </>
      ) : null}
    </>
  );
}

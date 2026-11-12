/** Welkomsttekst en zoekbalk; alleen op de startpagina. */
export default function Welcome({ view }) {
  return (
    <>
      {view.noSel ? (
        <>
          {/* ===== Intro ===== */}
          <section style={{ padding: "44px 40px 32px", display: "flex", flexWrap: "wrap", gap: "32px 48px", alignItems: "flex-start" }}>
            <div style={{ flex: "999 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <h1 style={{ margin: "0", fontSize: "52px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-1px", color: "#1B2A5C" }}>
                Welkom bij het EDSN Delivery Model
              </h1>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#2E3A55" }}>
                Hoe leveren we bij EDSN samen waarde voor de energieketen? Het Delivery Model laat het zien: van strategie en portfolio tot de teams die elke dag bouwen aan betrouwbare ketenvoorzieningen.{" "}
                <strong>Basis EDSN</strong>
                {" "}is onze Lean-Agile manier van werken, gebaseerd op SAFe.{" "}
                <strong>AI-Native EDSN</strong>
                {" "}bouwt daarop voort en laat zien hoe mensen en AI samen sneller, slimmer en verantwoord meer waarde creëren.
              </p>
              <div style={{ position: "relative", maxWidth: "820px", marginTop: "6px" }}>
                <form onSubmit={view.ask.submit} role="search" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 20px", border: "2px solid #1B2A5C", borderRadius: "32px", background: "#FFFFFF" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: "0" }}>
                    <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="#1B2A5C" strokeWidth="2.4" />
                    <path d="M15.5 15.5L21 21" stroke="#1B2A5C" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                  {" "}
                  <input id="edm-ask" type="text" autoComplete="off" spellCheck="false" aria-label="Stel je vraag over het Delivery Model" aria-controls="edm-ask-res" placeholder="Stel je vraag, bijv. ‘Wat doet een RTE?’" onInput={view.ask.input} onFocus={view.ask.input} onKeyDown={view.ask.key} style={{ flex: "1", minWidth: "0", minHeight: "46px", border: "0", outline: "none", background: "transparent", fontFamily: "inherit", fontSize: "17px", color: "#1B2A5C" }} />
                </form>
                <div id="edm-ask-res" role="listbox" aria-label="Antwoorden uit het Delivery Model" onClick={view.ask.pick} style={{ display: "none", position: "absolute", left: "0", right: "0", top: "calc(100% + 8px)", zIndex: "60", maxHeight: "460px", overflow: "auto", padding: "8px", borderRadius: "18px", border: "1.5px solid #D5DBE5", background: "#FFFFFF", boxShadow: "0 14px 36px rgba(27, 42, 92, 0.18)" }} />
              </div>
              <p style={{ margin: "0", fontSize: "15px", fontWeight: "600", color: "#0062A3" }}>
                Of klik op een onderdeel in de Big Picture voor uitleg, rollen en verantwoordelijkheden.
              </p>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}

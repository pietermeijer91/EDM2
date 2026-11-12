import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor value. */
export default function BusinessValue({ view }) {
  return (
    <>
      {view.page.isBV ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <section id="waardedraad" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Businesswaarde verbindt elke beslissing</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Van het doel van de organisatie tot de dagelijkse uitvoering: businesswaarde is de rode draad die alle keuzes met elkaar verbindt.
              </p>
              <div style={{ position: "relative", padding: "30px 24px", borderRadius: "16px", background: "#F4F6FA" }}>
                <span style={{ position: "absolute", left: "12%", right: "12%", top: "72px", height: "6px", borderRadius: "3px", background: view.orange }} />
                {" "}
                <span className="bv-pulse" style={css(view.bv.pulse)} />
                <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "16px" }}>
                  {(view.bv.chain || []).map((c, i) => (
                    <Fragment key={i}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
                        <span style={css(c.iconBox)}>
                          <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={c.icon} fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {" "}
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{c.title}</span>
                        {" "}
                        <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{c.text}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <span style={{ position: "absolute", left: "50%", top: "14px", transform: "translateX(-50%)", padding: "3px 12px", borderRadius: "12px", background: "#FFFFFF", border: `1.5px solid ${view.orange ?? ''}`, fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>
                  businesswaarde
                </span>
              </div>
            </section>
            <section id="hefboom" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Strategie: werken vanuit je hefboompunten</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Een doel geeft richting, maar nog geen plan. Strategie is de brug: geen lijst met doelen, maar een manier om de unieke sterktes van de organisatie in te zetten, die anderen moeilijk kunnen kopiëren.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
                {(view.bv.levers || []).map((l, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "18px", borderRadius: "14px", border: "1.5px solid #D5DBE5", borderTop: `5px solid ${l.color ?? ''}`, display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{l.title}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{l.text}</span>
                      {" "}
                      <span style={{ marginTop: "auto", padding: "8px 10px", borderRadius: "8px", background: "#F4F6FA", fontSize: "12px", lineHeight: "1.45", color: "#1B2A5C" }}>
                        <strong>Bij EDSN:</strong>
                        {" "}{l.edsn}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="valkuil" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Waarde uit het oog verliezen, of er samen op sturen</h2>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 48px minmax(0, 1fr)", gap: "10px", alignItems: "stretch" }}>
                <div style={{ padding: "20px 22px", borderRadius: "14px", background: "#FCEBEE", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#8A0F23" }}>Zonder waardefocus</span>
                  {(view.bv.without || []).map((w, i) => (
                    <Fragment key={i}>
                      <span style={{ display: "flex", gap: "8px", fontSize: "14px", lineHeight: "1.5", color: "#4A1019" }}>
                        <span style={{ flexShrink: "0", marginTop: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "#C8102E" }} />
                        {w.text}
                      </span>
                    </Fragment>
                  ))}
                  <span style={{ marginTop: "auto", paddingTop: "8px", borderTop: "1px solid #F3C4CC", fontSize: "13px", fontWeight: "700", color: "#8A0F23" }}>
                    → versnippering, verspilling en zwakke resultaten
                  </span>
                </div>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke={view.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div style={{ padding: "20px 22px", borderRadius: "14px", background: "#E8F4DA", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "#2F4A0B" }}>Met waardefocus</span>
                  {(view.bv.with || []).map((w, i) => (
                    <Fragment key={i}>
                      <span style={{ display: "flex", gap: "8px", fontSize: "14px", lineHeight: "1.5", color: "#1E3307" }}>
                        <span style={{ flexShrink: "0", marginTop: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "#5E8A12" }} />
                        {w.text}
                      </span>
                    </Fragment>
                  ))}
                  <span style={{ marginTop: "auto", paddingTop: "8px", borderTop: "1px solid #C9E2AA", fontSize: "13px", fontWeight: "700", color: "#2F4A0B" }}>
                    → decentrale besluiten die bijdragen aan hetzelfde doel
                  </span>
                </div>
              </div>
            </section>
            <section id="waarde-in-safe" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Waar waarde terugkomt in het delivery model</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                {(view.bv.artifacts || []).map((a, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "18px 20px", borderRadius: "14px", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={css(a.chip)}>{a.level}</span>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{a.title}</span>
                      </span>
                      {" "}
                      <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#3E4A63" }}>{a.text}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <p style={{ margin: "0", padding: "14px 18px", borderRadius: "10px", background: "#FFF4E3", fontSize: "15px", lineHeight: "1.6", color: "#1B2A5C" }}>
                Deze uitingen van waarde werken alleen als ze gebaseerd zijn op een echt begrip van het bedrijf. Dat begrip ontstaat via{" "}
                <strong>business value discovery</strong>
                : samen met klanten, Business Owners en teams scherp krijgen wat voor EDSN echt waardevol is.
              </p>
            </section>
            <section id="meten" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Meten op resultaat: gepland versus gerealiseerd</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Bij de PI-planning kennen Business Owners aan elk PI-doel een businesswaarde toe (1 tot 10). Aan het eind van de PI beoordelen ze wat er werkelijk is opgeleverd. De verhouding tussen gerealiseerde en geplande waarde laat zien hoe voorspelbaar de ART levert.
              </p>
              <div style={{ padding: "22px", borderRadius: "16px", background: "#F4F6FA", display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)", gap: "24px", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ display: "flex", gap: "16px", fontSize: "12px", fontWeight: "600", color: "#3E4A63" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "14px", height: "10px", borderRadius: "2px", background: "#C9D1DD" }} />
                      gepland
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "14px", height: "10px", borderRadius: "2px", background: view.blue }} />
                      gerealiseerd
                    </span>
                    <span style={{ marginLeft: "auto", fontStyle: "italic" }}>voorbeeld</span>
                  </span>
                  {(view.bv.objectives || []).map((o, i) => (
                    <Fragment key={i}>
                      <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1fr) 54px", gap: "12px", alignItems: "center" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#1B2A5C" }}>{o.name}</span>
                        {" "}
                        <span style={{ position: "relative", display: "block", height: "22px", borderRadius: "4px", background: "#FFFFFF" }}>
                          <span style={css(o.planned)} />
                          {" "}
                          <span style={css(o.actual)} />
                        </span>
                        {" "}
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1B2A5C", textAlign: "right" }}>{o.score}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
                  <svg width="190" height="110" viewBox="0 0 190 110" role="img" aria-label={`Voorspelbaarheid ${view.bv.pct ?? ''} procent, binnen de bandbreedte van 80 tot 100 procent`}>
                    <path d="M15 95a80 80 0 0 1 160 0" fill="none" stroke="#E1E6EE" strokeWidth="16" />
                    <path d={view.bv.band} fill="none" stroke="#95C11F" strokeWidth="16" />
                    <path d={view.bv.needle} stroke="#1B2A5C" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="95" cy="95" r="7" fill="#1B2A5C" />
                  </svg>
                  {" "}
                  <span style={{ fontSize: "32px", fontWeight: "800", color: "#1B2A5C", lineHeight: "1" }}>
                    {view.bv.pct}%
                  </span>
                  {" "}
                  <span style={{ fontSize: "13px", lineHeight: "1.45", color: "#3E4A63" }}>
                    ART-voorspelbaarheid. Een gezonde ART zit doorgaans tussen{" "}
                    <strong>80% en 100%</strong>
                    {" "}(groene band).
                  </span>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}

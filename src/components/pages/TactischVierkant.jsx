import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor t4k. */
export default function TactischVierkant({ view }) {
  return (
    <>
      {view.page.isT4K ? (
        <>
          <div style={{ padding: "16px 18px", borderRadius: "14px", border: `2px solid ${view.orange ?? ''}`, background: "#FFF8EC", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>
                Wijzigingsvoorstel WP-001 · In review bij het LACE
              </span>
              {" "}
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Wanneer functioneert een T4K goed?</span>
            </span>
            {" "}
            <span role="group" aria-label="Weergave" style={{ display: "flex", gap: "4px", padding: "4px", borderRadius: "24px", background: "#FFFFFF", border: "1.5px solid #D5DBE5" }}>
              {(view.cv.tabs || []).map((tb, i) => (
                <Fragment key={i}>
                  <button style={css(tb.style)} onClick={tb.pick} aria-pressed={tb.on}>{tb.label}</button>
                </Fragment>
              ))}
            </span>
          </div>
          {view.lock.showT4KLock ? (
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
          {view.cv.isDelta ? (
            <>
              <section id="delta" style={{ padding: "20px 22px", borderRadius: "14px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "#1B2A5C" }}>Wat verandert er?</h2>
                {(view.cv.changes || []).map((ch, i) => (
                  <Fragment key={i}>
                    <a href={ch.href} style={{ display: "grid", gridTemplateColumns: "120px minmax(0, 1fr)", gap: "12px", alignItems: "start", padding: "10px 12px", borderRadius: "10px", background: "#FFFFFF", textDecoration: "none" }}>
                      <span style={css(ch.tag)}>{ch.type}</span>
                      {" "}
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{ch.what}</span>
                        <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{ch.text}</span>
                      </span>
                    </a>
                  </Fragment>
                ))}
              </section>
            </>
          ) : null}
          <section id="vier-rollen" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>
              Vier rollen, één gezamenlijk ART-resultaat
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px", maxWidth: "620px" }}>
              {(view.page.t4k || []).map((q, i) => (
                <Fragment key={i}>
                  <button style={css(q.tile)} onClick={q.pick}>
                    <span style={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", opacity: ".9" }}>{q.theme}</span>
                    {" "}
                    <span style={{ fontSize: "40px", fontWeight: "700", lineHeight: "1" }}>{q.abbr}</span>
                    {" "}
                    <span style={{ fontSize: "15px", fontWeight: "600" }}>{q.full}</span>
                  </button>
                </Fragment>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "220px minmax(0, 1fr) minmax(0, 1fr)", gap: "20px", padding: "12px 18px", background: "#EEF2F7", borderRadius: "10px", fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>
                <span>Rol</span>
                <span>Primaire bijdrage</span>
                <span>Belangrijkste afstemming</span>
              </div>
              {(view.page.t4k || []).map((q, i) => (
                <Fragment key={i}>
                  <div style={{ display: "grid", gridTemplateColumns: "220px minmax(0, 1fr) minmax(0, 1fr)", gap: "20px", padding: "16px 18px", border: "1px solid #D5DBE5", borderRadius: "10px", alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                      <span style={{ fontSize: "26px", fontWeight: "700", color: q.color }}>{q.abbr}</span>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: q.color }}>{q.full}</span>
                    </span>
                    {" "}
                    <span style={{ fontSize: "17px", lineHeight: "1.5", color: "#1B2A5C" }}>{q.bijdrage}</span>
                    {" "}
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#2E3A55" }}>{q.afst}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          {view.cv.showConcept ? (
            <>
              <div style={css(view.cv.wrap)}>
                {view.cv.isDelta ? (
                  <>
                    <span style={{ alignSelf: "flex-start", padding: "4px 12px", borderRadius: "10px", background: "#2F7A12", color: "#FFFFFF", fontSize: "12px", fontWeight: "800", letterSpacing: "1px" }}>
                      NIEUW · VOORGESTELD IN WP-001
                    </span>
                  </>
                ) : null}
                <section id="kenmerken" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Wanneer functioneert een T4K goed?</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                    Een goed T4K is meer dan vier sterke rollen naast elkaar. Het is één leiderschapsteam dat samen verantwoordelijk is voor het ART-resultaat, van idee tot operatie. Deze zes kenmerken maken het verschil.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                    {(view.t4kh.traits || []).map((tr, i) => (
                      <Fragment key={i}>
                        <div style={{ padding: "18px", borderRadius: "14px", border: "1.5px solid #D5DBE5", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                          <span style={css(tr.iconBox)}>
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                              <path d={tr.icon} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {" "}
                          <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{tr.title}</span>
                            {" "}
                            <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#3E4A63" }}>{tr.text}</span>
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </section>
                <section id="signalen" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Signalen: zo zie je het</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                    <div style={{ padding: "20px 22px", borderRadius: "14px", background: "#E8F4DA", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "700", color: "#2F4A0B" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" fill="#5E8A12" />
                          <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#FFFFFF" strokeWidth="2.2" />
                        </svg>
                        Het werkt als…
                      </span>
                      {(view.t4kh.good || []).map((g, i) => (
                        <Fragment key={i}>
                          <span style={{ display: "flex", gap: "8px", fontSize: "14px", lineHeight: "1.5", color: "#1E3307" }}>
                            <span style={{ flexShrink: "0", marginTop: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "#5E8A12" }} />
                            {g.text}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                    <div style={{ padding: "20px 22px", borderRadius: "14px", background: "#FCEBEE", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "700", color: "#8A0F23" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 3l10 18H2z" fill="#C8102E" />
                          <path d="M12 10v5M12 18h.01" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                        Let op als…
                      </span>
                      {(view.t4kh.warn || []).map((w, i) => (
                        <Fragment key={i}>
                          <span style={{ display: "flex", gap: "8px", fontSize: "14px", lineHeight: "1.5", color: "#4A1019" }}>
                            <span style={{ flexShrink: "0", marginTop: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "#C8102E" }} />
                            {w.text}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </section>
                <section id="ritme" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Het ritme van het T4K</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                    {(view.t4kh.rhythm || []).map((r, i) => (
                      <Fragment key={i}>
                        <div style={{ padding: "16px", borderRadius: "14px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={css(r.tag)}>{r.when}</span>
                          {" "}
                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{r.title}</span>
                          {" "}
                          <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{r.text}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </section>
                <section id="zelfscan" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Zelfscan: hoe staat ons T4K ervoor?</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                    Geef per stelling aan in hoeverre die klopt (1 = helemaal niet, 5 = helemaal wel). Doe het eerst ieder voor zich en vergelijk daarna: juist de verschillen geven het beste gesprek. De scan wordt niet opgeslagen.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {(view.t4kh.scan || []).map((q, i) => (
                      <Fragment key={i}>
                        <div style={{ display: "grid", gridTemplateColumns: "96px minmax(0, 1fr) auto", gap: "14px", alignItems: "center", padding: "12px 16px", borderRadius: "12px", border: "1.5px solid #D5DBE5" }}>
                          <span style={css(q.tag)}>{q.dim}</span>
                          {" "}
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#1B2A5C" }}>{q.text}</span>
                          {" "}
                          <span style={{ display: "flex", gap: "4px" }} role="group" aria-label="Score">
                            {(q.opts || []).map((o, i) => (
                              <Fragment key={i}>
                                <button style={css(o.style)} onClick={o.pick} aria-pressed={o.on} aria-label={`Score ${o.v ?? ''}`}>{o.v}</button>
                              </Fragment>
                            ))}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ padding: "22px", borderRadius: "16px", background: "#F4F6FA", display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)", gap: "24px", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {(view.t4kh.dims || []).map((d, i) => (
                        <Fragment key={i}>
                          <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr) 40px", gap: "12px", alignItems: "center" }}>
                            <span style={{ fontSize: "13px", fontWeight: "700", color: "#1B2A5C" }}>{d.name}</span>
                            {" "}
                            <span style={{ display: "block", height: "14px", borderRadius: "7px", background: "#E1E6EE", overflow: "hidden" }}>
                              <span style={css(d.bar)} />
                            </span>
                            {" "}
                            <span style={{ fontSize: "13px", fontWeight: "700", color: "#1B2A5C", textAlign: "right" }}>{d.label}</span>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                    <div style={css(view.t4kh.verdictBox)}>
                      <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", opacity: ".85" }}>Uitkomst</span>
                      {" "}
                      <span style={{ fontSize: "34px", fontWeight: "800", lineHeight: "1" }}>{view.t4kh.avg}</span>
                      {" "}
                      <span style={{ fontSize: "16px", fontWeight: "700" }}>{view.t4kh.verdict}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", opacity: ".92" }}>{view.t4kh.advice}</span>
                      {" "}
                      <button style={{ alignSelf: "flex-start", marginTop: "4px", minHeight: "36px", padding: "0 14px", border: "0", borderRadius: "18px", background: "rgba(255,255,255,.9)", color: "#1B2A5C", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "700" }} onClick={view.t4kh.reset}>
                        Opnieuw beginnen
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </>
          ) : null}
          <section id="samen" style={{ padding: "24px 28px", borderRadius: "14px", background: view.navy, color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h2 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Samen verantwoordelijk voor de hele CDP</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#E6ECF5" }}>
              Van idee tot operatie: het T4K draagt samen het ART-resultaat over de hele Continuous Delivery Pipeline. Werkvoorstel: bestaande formele mandaten blijven bij de bevoegde rollen en governance.
            </p>
          </section>
        </>
      ) : null}
    </>
  );
}

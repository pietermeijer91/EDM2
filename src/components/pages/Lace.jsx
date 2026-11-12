import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor f5. */
export default function Lace({ view }) {
  return (
    <>
      {view.page.isLACE ? (
        <>
          <div style={{ padding: "16px 18px", borderRadius: "14px", border: `2px solid ${view.orange ?? ''}`, background: "#FFF8EC", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>
                Wijzigingsvoorstel WP-004 · Concept
              </span>
              {" "}
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Het LACE: rol, werkwijze en producten</span>
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
                <span style={{ fontSize: "20px", fontWeight: "700", color: "#1B2A5C" }}>Alleen voor reviewers</span>
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
                {(view.lace.changes || []).map((ch, i) => (
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
              <section id="vervalt" style={{ padding: "20px", borderRadius: "16px", border: "2px solid #C8102E", background: "#FDF1F2", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ alignSelf: "flex-start", padding: "4px 12px", borderRadius: "10px", background: "#C8102E", color: "#FFFFFF", fontSize: "12px", fontWeight: "800", letterSpacing: "1px" }}>
                  VERVALT · OPGENOMEN IN DE NIEUWE SECTIES
                </span>
                {(view.lace.old || []).map((od, i) => (
                  <Fragment key={i}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", opacity: "0.85" }}>
                      <span style={{ fontSize: "18px", fontWeight: "700", color: "#8A1020", textDecoration: "line-through" }}>{od.h}</span>
                      {" "}
                      <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#6B2A33", textDecoration: "line-through" }}>{od.p}</span>
                    </div>
                  </Fragment>
                ))}
              </section>
            </>
          ) : null}
          {view.cv.showConcept ? (
            <>
              <div style={css(view.cv.wrap)}>
                {view.cv.isDelta ? (
                  <>
                    <span style={{ alignSelf: "flex-start", padding: "4px 12px", borderRadius: "10px", background: "#2F7A12", color: "#FFFFFF", fontSize: "12px", fontWeight: "800", letterSpacing: "1px" }}>
                      NIEUW · VOORGESTELD IN WP-004
                    </span>
                  </>
                ) : null}
                {/* 1. Hub */}
                <section id="lace-oogopslag" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Het LACE in één oogopslag</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#2E3A55" }}>
                    Het LACE is de motor achter onze manier van werken. Het is geen afdeling die regels oplegt, maar een klein agile team dat verbindt: tussen leiderschap en teams, tussen strategie en de werkvloer, en tussen de vastgestelde WoW en wat we in de praktijk leren.
                  </p>
                  <div style={{ position: "relative", width: "100%", height: "480px", borderRadius: "18px", background: "#F4F6FA", overflow: "hidden" }}>
                    <svg style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%" }} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <g stroke="#F39200" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" fill="none">
                        <line x1="50" y1="50" x2="19" y2="17" vectorEffect="non-scaling-stroke" />
                        <line x1="50" y1="50" x2="19" y2="50" vectorEffect="non-scaling-stroke" />
                        <line x1="50" y1="50" x2="19" y2="83" vectorEffect="non-scaling-stroke" />
                        <line x1="50" y1="50" x2="81" y2="17" vectorEffect="non-scaling-stroke" />
                        <line x1="50" y1="50" x2="81" y2="50" vectorEffect="non-scaling-stroke" />
                        <line x1="50" y1="50" x2="81" y2="83" vectorEffect="non-scaling-stroke" />
                      </g>
                    </svg>
                    <div className="tour-ring" style={{ position: "absolute", left: "50%", top: "50%", width: "190px", height: "190px", margin: "-95px 0 0 -95px", borderRadius: "50%", border: `3px dashed ${view.orange ?? ''}` }} />
                    <div style={{ position: "absolute", left: "50%", top: "50%", width: "160px", height: "160px", margin: "-80px 0 0 -80px", borderRadius: "50%", background: view.orange, boxShadow: "0 12px 30px rgba(243, 146, 0, 0.35)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textAlign: "center" }}>
                      <span style={{ fontSize: "34px", fontWeight: "800", letterSpacing: "1px", color: "#2B1A00" }}>LACE</span>
                      {" "}
                      <span style={{ fontSize: "11px", lineHeight: "1.3", fontWeight: "600", color: "#3A2400" }}>
                        Lean-Agile Center
                        <br />
                        of Excellence
                      </span>
                    </div>
                    {(view.lace.hub || []).map((hb, i) => (
                      <Fragment key={i}>
                        <div style={css(hb.box)}>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: view.navy }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                                <path d={hb.icon} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>{hb.title}</span>
                          </span>
                          {" "}
                          <span style={{ fontSize: "12px", lineHeight: "1.5", color: "#3E4A63" }}>{hb.text}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </section>
                {/* 2. Verantwoordelijkheden */}
                <section id="lace-taken" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Vijf verantwoordelijkheden</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" }}>
                    {(view.lace.taken || []).map((tk, i) => (
                      <Fragment key={i}>
                        <div style={{ padding: "18px", borderRadius: "14px", border: "1.5px solid #D5DBE5", borderTop: `5px solid ${view.orange ?? ''}`, background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "30px", height: "30px", borderRadius: "50%", background: view.navy, color: "#FFFFFF", fontSize: "14px", fontWeight: "800" }}>
                              {tk.n}
                            </span>
                            <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{tk.title}</span>
                          </span>
                          {" "}
                          <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#3E4A63" }}>{tk.text}</span>
                          {" "}
                          <span style={{ marginTop: "auto", padding: "8px 10px", borderRadius: "8px", background: "#FFF8EC", fontSize: "13px", lineHeight: "1.5", color: "#5A3A00" }}>
                            <strong>Bij EDSN:</strong>
                            {" "}{tk.edsn}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </section>
                {/* 3. Producten */}
                <section id="lace-producten" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Onze producten</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#2E3A55" }}>
                    Het LACE werkt zelf als productteam. Onze producten maken de werkwijze vindbaar, begrijpelijk en levend.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
                    {(view.lace.prods || []).map((pr2, i) => (
                      <Fragment key={i}>
                        <div style={css(pr2.box)}>
                          <span style={css(pr2.tag)}>{pr2.kind}</span>
                          {" "}
                          <span style={{ fontSize: "22px", fontWeight: "800" }}>{pr2.title}</span>
                          {" "}
                          <span style={{ fontSize: "14px", lineHeight: "1.6", opacity: "0.9" }}>{pr2.text}</span>
                          {pr2.hasRun ? (
                            <>
                              <button style={css(pr2.btn)} onClick={pr2.run}>{pr2.cta}</button>
                            </>
                          ) : null}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </section>
                {/* 4. Team */}
                <section id="lace-team" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Het LACE als agile team</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#2E3A55" }}>
                    Het LACE geeft het goede voorbeeld: het werkt zelf als agile team, met vaste rollen, een zichtbare backlog en dezelfde cadans als de ART’s.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "12px" }}>
                    {(view.lace.roles || []).map((lr, i) => (
                      <Fragment key={i}>
                        <div style={{ padding: "16px", borderRadius: "14px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{lr.title}</span>
                          {" "}
                          <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#3E4A63" }}>{lr.text}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#5A6478" }}>Het LACE van EDSN:</span>
                    {(view.lace.crew || []).map((cr, i) => (
                      <Fragment key={i}>
                        <span style={{ padding: "6px 14px", borderRadius: "16px", background: view.navy, color: "#FFFFFF", fontSize: "13px", fontWeight: "700" }}>
                          {cr}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </section>
                {/* 5. Ritme */}
                <section id="lace-ritme" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Het ritme van het LACE</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#2E3A55" }}>
                    Het LACE plant, levert en verbetert in de PI-cadans van de ART’s, volgens het ritme van align, sense en respond. Zo beweegt het mee met de teams die het ondersteunt.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "8px" }}>
                    {(view.lace.ritme || []).map((rt, i) => (
                      <Fragment key={i}>
                        <div style={css(rt.box)}>
                          <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", opacity: "0.8" }}>{rt.phase}</span>
                          {" "}
                          <span style={{ fontSize: "15px", fontWeight: "700" }}>{rt.title}</span>
                          {" "}
                          <span style={{ fontSize: "12px", lineHeight: "1.5", opacity: "0.9" }}>{rt.text}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </section>
                {/* 6. Backlog */}
                <section id="lace-backlog" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>De transformatiebacklog</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#2E3A55" }}>
                    Alle verbeteringen aan de manier van werken staan op één zichtbare backlog, geprioriteerd met WSJF en gekoppeld aan transformatie-OKR’s. Liever kleine, zichtbare successen dan alles tegelijk.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "8px" }}>
                    {(view.lace.kanban || []).map((kc, i) => (
                      <Fragment key={i}>
                        <div style={{ padding: "10px", borderRadius: "12px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "8px", minHeight: "170px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.5px", textTransform: "uppercase", color: "#1B2A5C" }}>{kc.title}</span>
                          {(kc.items || []).map((ki, i) => (
                            <Fragment key={i}>
                              <span style={{ padding: "8px 9px", borderRadius: "8px", background: "#FFFFFF", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "4px", boxShadow: "0 2px 0 rgba(27, 42, 92, 0.06)" }}>
                                <span style={css(ki.tag)}>{ki.type}</span>
                                <span style={{ fontSize: "12px", lineHeight: "1.4", fontWeight: "600", color: "#1B2A5C" }}>{ki.label}</span>
                              </span>
                            </Fragment>
                          ))}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <span style={{ fontSize: "12px", color: "#5A6478" }}>
                    Voorbeelditems ter illustratie. De echte backlog volgt uit de review en de PI Planning van het LACE.
                  </span>
                </section>
                {/* 7. Organisatiemodel */}
                <section id="lace-model" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Het organisatiemodel groeit mee</h2>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#2E3A55" }}>
                    Een team van vier tot zes mensen kan een paar honderd collega’s ondersteunen. Groeit de organisatie of de volwassenheid, dan verschuift het LACE naar een hybride of decentraal model.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 28px minmax(0, 1fr) 28px minmax(0, 1fr)", gap: "6px", alignItems: "stretch" }}>
                    {(view.lace.model || []).map((md, i) => (
                      <Fragment key={i}>
                        {md.isStep ? (
                          <>
                            <div style={{ padding: "16px", borderRadius: "14px", border: "1.5px solid #D5DBE5", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                              <div aria-hidden="true" style={{ position: "relative", height: "70px", borderRadius: "10px", background: "#F4F6FA" }}>
                                {(md.dots || []).map((dd, i) => (
                                  <Fragment key={i}>
                                    <span style={css(dd)} />
                                  </Fragment>
                                ))}
                              </div>
                              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>{md.phase}</span>
                              {" "}
                              <span style={{ fontSize: "17px", fontWeight: "700", color: "#1B2A5C" }}>{md.title}</span>
                              {" "}
                              <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#3E4A63" }}>{md.text}</span>
                            </div>
                          </>
                        ) : null}
                        {md.isArrow ? (
                          <>
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M6 3l7 7-7 7" fill="none" stroke={view.orange} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </>
                        ) : null}
                      </Fragment>
                    ))}
                  </div>
                  <span style={{ padding: "10px 14px", borderRadius: "10px", background: "#FFF8EC", fontSize: "14px", lineHeight: "1.5", color: "#5A3A00" }}>
                    <strong>Vraag voor de review:</strong>
                    {" "}welk model past nu bij EDSN, en waar willen we over een jaar staan?
                  </span>
                </section>
                {/* 8. Meten */}
                <section id="lace-meten" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Zo meten we voortgang</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
                    {(view.lace.meten || []).map((mt, i) => (
                      <Fragment key={i}>
                        <div style={{ padding: "18px", borderRadius: "14px", background: "#F4F6FA", borderLeft: `5px solid ${mt.color ?? ''}`, display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{mt.title}</span>
                          {(mt.items || []).map((mi, i) => (
                            <Fragment key={i}>
                              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3E4A63" }}>
                                {"• "}{mi}
                              </span>
                            </Fragment>
                          ))}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <button style={{ alignSelf: "flex-start", minHeight: "40px", padding: "0 16px", border: "1.5px solid #D5DBE5", borderRadius: "20px", background: "#FFFFFF", color: "#1B2A5C", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "700" }} onClick={view.lace.openMeasure}>
                    Meer over Measure and Grow →
                  </button>
                </section>
                {/* 9. AI-Native */}
                <section id="lace-ai" style={{ padding: "22px 24px", borderRadius: "16px", background: "#2A1650", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h2 style={{ margin: "0", fontSize: "26px", lineHeight: "1.25", fontWeight: "700", color: "#FFFFFF" }}>Het LACE in een AI-Native EDSN</h2>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#E4DAF7" }}>
                    AI verandert niet alleen hoe teams werken, maar ook hoe het LACE werkt. Het LACE helpt de organisatie AI verantwoord te omarmen en doet dat zelf voor.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
                    {(view.lace.ai || []).map((la, i) => (
                      <Fragment key={i}>
                        <div style={{ padding: "14px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.18)", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#FFFFFF" }}>{la.title}</span>
                          {" "}
                          <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#E4DAF7" }}>{la.text}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <span style={{ fontSize: "12px", color: "#C9B8EC" }}>
                    Eigen vertaling door het LACE: AI-Native SAFe beschrijft de rol van het LACE (nog) niet expliciet.
                  </span>
                </section>
                {/* 10. In de Big Picture */}
                <section id="lace-bigpicture" style={{ padding: "22px 24px", borderRadius: "16px", border: `2px dashed ${view.orange ?? ''}`, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px" }}>
                  <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>
                      Waar is het LACE actief in de Big Picture?
                    </h2>
                    <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#3E4A63" }}>
                      Het LACE staat niet op één plek: het is actief van portfolio tot team. Bekijk het in de plaat: alle plekken waar het LACE een rol speelt lichten op.
                    </span>
                  </div>
                  <button style={{ minHeight: "48px", padding: "0 22px", display: "flex", alignItems: "center", gap: "10px", border: "0", borderRadius: "24px", background: view.orange, color: "#2B1A00", cursor: "pointer", fontFamily: "inherit", fontSize: "15px", fontWeight: "800" }} onClick={view.lace.showInBP}>
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" fill="none" stroke="#2B1A00" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" fill="#2B1A00" />
                    </svg>
                    Toon het LACE in de Big Picture
                  </button>
                </section>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}

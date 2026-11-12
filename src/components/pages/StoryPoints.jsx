import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor sp. */
export default function StoryPoints({ view }) {
  return (
    <>
      {view.page.isSP ? (
        <>
          <section id="animatie" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Het proces in beweging</h2>
            <div style={{ padding: "24px", borderRadius: "16px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
                <div className="sp-pulse" style={{ position: "absolute", left: "4px", top: "100px", width: "72px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", animationPlayState: view.play }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "60px", height: "80px", borderRadius: "10px", background: view.orange, color: "#2B1A00", fontSize: "34px", fontWeight: "700", boxShadow: "0 5px 0 rgba(0,0,0,.18)" }}>
                    1
                  </span>
                  {" "}
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#1B2A5C", textAlign: "center", lineHeight: "1.2" }}>
                    referentie-
                    <br />
                    story
                  </span>
                </div>
                {(view.sp.lanes || []).map((ln, i) => (
                  <Fragment key={i}>
                    <div style={css(ln.style)}><span style={css(ln.pill)}>{ln.name}</span></div>
                  </Fragment>
                ))}
                <div className="sp-gate" style={{ position: "absolute", left: "288px", top: "22px", width: "0", height: "268px", borderLeft: `3px dashed ${view.orange ?? ''}`, animationPlayState: view.play }} />
                <span style={{ position: "absolute", left: "220px", top: "0", width: "140px", textAlign: "center", fontSize: "12px", fontWeight: "700", color: "#1B2A5C" }}>
                  Schatten t.o.v. 1
                </span>
                {(view.sp.cards || []).map((cd, i) => (
                  <Fragment key={i}>
                    <span className="sp-move" style={css(cd.style)}>
                      story{" "}
                      <span className="sp-badge" style={css(cd.badge)}>{cd.pts}</span>
                    </span>
                  </Fragment>
                ))}
                <div style={{ position: "absolute", left: "584px", top: "14px", width: "180px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>ART-capaciteit</span>
                  {(view.sp.lanes || []).map((ln, i) => (
                    <Fragment key={i}>
                      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#3E4A63" }}>{ln.name}</span>
                        {" "}
                        <span style={{ display: "block", height: "14px", borderRadius: "7px", background: "#E1E6EE", overflow: "hidden" }}>
                          <span className="sp-fill" style={css(ln.fill)} />
                        </span>
                      </span>
                    </Fragment>
                  ))}
                  <span className="sp-check" style={{ marginTop: "6px", padding: "10px 12px", borderRadius: "10px", background: view.navy, color: "#FFFFFF", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px", animationPlayState: view.play }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                      <circle cx="9" cy="9" r="8" fill={view.green} />
                      <path d="M5 9.3 7.7 12 13 6.5" fill="none" stroke="#1F2604" strokeWidth="2" />
                    </svg>
                    {" "}Voorspelbare PI-planning
                  </span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                {(view.sp.animSteps || []).map((as, i) => (
                  <Fragment key={i}>
                    <span className="sp-hi" style={css(as.style)}>
                      <span style={css(as.dot)}>{as.n}</span>
                      {" "}{as.title}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
          <section id="visual" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Zo werkt normaliseren</h2>
            <div style={{ padding: "28px", borderRadius: "16px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "30px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 24px minmax(0, 1fr) 24px minmax(0, 1fr) 24px minmax(0, 1fr)", gap: "8px", alignItems: "stretch" }}>
                {(view.sp.steps || []).map((st, i) => (
                  <Fragment key={i}>
                    {st.isStep ? (
                      <>
                        <div style={{ padding: "18px 16px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", background: st.color, color: st.fg, fontSize: "16px", fontWeight: "700" }}>
                            {st.n}
                          </span>
                          {" "}
                          <span style={{ fontSize: "16px", fontWeight: "700", lineHeight: "1.3", color: "#1B2A5C" }}>{st.title}</span>
                          {" "}
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3E4A63" }}>{st.text}</span>
                        </div>
                      </>
                    ) : null}
                    {st.isArrow ? (
                      <>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M6 3l7 7-7 7" fill="none" stroke={view.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </>
                    ) : null}
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>Eén schaal voor alle teams in de ART</span>
                <div style={{ display: "grid", gridTemplateColumns: "90px repeat(6, minmax(0, 1fr))", gap: "10px", alignItems: "end" }}>
                  <span />
                  {(view.sp.scale || []).map((c, i) => (
                    <Fragment key={i}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                        <span style={css(c.card)}>{c.v}</span>
                        {" "}
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#3E4A63", minHeight: "16px" }}>{c.cap}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
                {(view.sp.teams || []).map((tm, i) => (
                  <Fragment key={i}>
                    <div style={{ display: "grid", gridTemplateColumns: "90px repeat(6, minmax(0, 1fr))", gap: "10px", alignItems: "center", padding: "8px 0", borderTop: "1px dashed #C9D1DD" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>{tm.name}</span>
                      {(tm.cells || []).map((cl, i) => (
                        <Fragment key={i}>
                          <span style={{ display: "flex", justifyContent: "center", gap: "4px", minHeight: "22px" }}>
                            {(cl.items || []).map((it, i) => (
                              <Fragment key={i}>
                                <span style={{ width: "26px", height: "18px", borderRadius: "3px", background: tm.color, boxShadow: "0 3px 0 rgba(0,0,0,.2)" }} />
                              </Fragment>
                            ))}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                ))}
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3E4A63" }}>
                  Elk blokje is een story. Teams schatten zelf, maar altijd ten opzichte van dezelfde referentiestory (1 punt). Daardoor is velocity over teams heen te begrijpen en betrouwbaar te plannen.
                </span>
              </div>
            </div>
          </section>
          <section id="uitgangspunten" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>
              Vast te stellen uitgangspunten bij velocity
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
              {(view.sp.principles || []).map((pr, i) => (
                <Fragment key={i}>
                  <div style={{ padding: "18px 20px", border: "1.5px solid #D5DBE5", borderRadius: "12px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: pr.color, color: pr.fg, fontSize: "15px", fontWeight: "700" }}>
                      {pr.n}
                    </span>
                    {" "}
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{pr.title}</span>
                      {" "}
                      <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#3E4A63" }}>{pr.text}</span>
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="alternatieven" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Alternatieven afgewogen</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1.2fr) minmax(0, 1.2fr) 130px minmax(0, 1.3fr)", gap: "16px", padding: "12px 18px", background: "#EEF2F7", borderRadius: "10px", fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>
                <span>Methode</span>
                <span>Geschikt voor</span>
                <span>Forecasting</span>
                <span>Jira Align</span>
                <span>Conclusie</span>
              </div>
              {(view.sp.alts || []).map((al, i) => (
                <Fragment key={i}>
                  <div style={css(al.row)}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{al.name}</span>
                    {" "}
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#2E3A55" }}>{al.use}</span>
                    {" "}
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#2E3A55" }}>{al.fc}</span>
                    {" "}
                    <span style={css(al.jaStyle)}>{al.ja}</span>
                    {" "}
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#2E3A55" }}>{al.concl}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}

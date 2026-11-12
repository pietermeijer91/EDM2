import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor vpt. */
export default function FeatureKanban({ view }) {
  return (
    <>
      {view.page.isVPT ? (
        <>
          <section id="oogopslag-vpt" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px" }}>
            {(view.vpt.glance || []).map((g, i) => (
              <Fragment key={i}>
                <div style={{ padding: "18px 20px", borderRadius: "12px", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={css(g.chip)}>{g.who}</span>
                  {" "}
                  <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#2E3A55" }}>{g.text}</span>
                </div>
              </Fragment>
            ))}
          </section>
          <section id="wat-doen" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Wat moet ik nu doen?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
              {(view.vpt.roles || []).map((r, i) => (
                <Fragment key={i}>
                  <div style={css(r.box)}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={css(r.badge)}>{r.abbr}</span>
                      <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C" }}>{r.name}</span>
                    </span>
                    {" "}
                    <span style={{ fontSize: "14px", lineHeight: "1.5", fontStyle: "italic", color: "#3E4A63" }}>{r.who}</span>
                    {(r.items || []).map((it, i) => (
                      <Fragment key={i}>
                        <span style={{ display: "flex", flexDirection: "column", gap: "1px", paddingTop: "8px", borderTop: "1px solid #E6EAF0" }}>
                          {it.hasQ ? (
                            <>
                              <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>{it.q}</span>
                            </>
                          ) : null}
                          <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#2E3A55" }}>{it.a}</span>
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="dor-dod" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>
              {"Definition of Ready & Done"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
              {(view.vpt.defs || []).map((d, i) => (
                <Fragment key={i}>
                  <div style={css(d.box)}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={css(d.badge)}>{d.abbr}</span>
                      <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C" }}>{d.title}</span>
                    </span>
                    {" "}
                    <span style={{ fontSize: "14px", color: "#3E4A63" }}>{d.intro}</span>
                    {(d.items || []).map((it, i) => (
                      <Fragment key={i}>
                        <span style={{ display: "flex", gap: "10px", fontSize: "14px", lineHeight: "1.5", color: "#2E3A55" }}>
                          <svg style={{ flexShrink: "0", marginTop: "2px" }} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <rect x="1" y="1" width="14" height="14" rx="3" fill="#FFFFFF" stroke={d.color} strokeWidth="1.6" />
                            <path d="M4.5 8.2 7 10.6l4.5-5" fill="none" stroke={d.color} strokeWidth="1.8" />
                          </svg>
                          {" "}{it.text}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="canvas" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>
              Feature canvas: wat leg je wanneer vast?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 22px minmax(0, 1fr) 22px minmax(0, 1fr)", gap: "6px", alignItems: "stretch" }}>
              {(view.vpt.canvas || []).map((cv, i) => (
                <Fragment key={i}>
                  {cv.isCol ? (
                    <>
                      <div style={{ padding: "18px", borderRadius: "12px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={css(cv.chip)}>{cv.phase}</span>
                        {(cv.items || []).map((it, i) => (
                          <Fragment key={i}>
                            <span style={{ padding: "8px 10px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #DDE2EA", fontSize: "13px", lineHeight: "1.45", color: "#1B2A5C" }}>
                              {it.text}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    </>
                  ) : null}
                  {cv.isArrow ? (
                    <>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M6 3l7 7-7 7" fill="none" stroke={view.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </>
                  ) : null}
                </Fragment>
              ))}
            </div>
            <p style={{ margin: "0", padding: "14px 18px", borderRadius: "10px", background: "#FFF4E3", fontSize: "15px", lineHeight: "1.6", color: "#1B2A5C" }}>
              Vul het canvas samen met stakeholders en teams in. Het doel is niet alleen een compleet formulier, maar vooral het goede gesprek over waarde, haalbaarheid en impact.
            </p>
          </section>
        </>
      ) : null}
    </>
  );
}

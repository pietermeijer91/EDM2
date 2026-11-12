import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor concepts. */
export default function Concepten({ view }) {
  return (
    <>
      {view.lock.showConcepts ? (
        <>
          <section id="proces" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Zo verloopt een wijziging</h2>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 26px minmax(0, 1fr) 26px minmax(0, 1fr)", gap: "6px", alignItems: "stretch" }}>
              {(view.wow.process || []).map((st, i) => (
                <Fragment key={i}>
                  {st.isStep ? (
                    <>
                      <div style={{ padding: "16px", borderRadius: "12px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={css(st.dot)}>{st.n}</span>
                        {" "}
                        <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{st.title}</span>
                        {" "}
                        <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{st.text}</span>
                      </div>
                    </>
                  ) : null}
                  {st.isArrow ? (
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
          </section>
          <section id="voorstellen" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Lopende voorstellen</h2>
            {(view.wow.proposals || []).map((pp, i) => (
              <Fragment key={i}>
                <div style={{ padding: "22px 24px", borderRadius: "16px", border: `2px solid ${view.orange ?? ''}`, display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", color: "#7A4A00" }}>
                        {pp.id}{" · "}{pp.pageTitle}
                      </span>
                      {" "}
                      <span style={{ fontSize: "22px", fontWeight: "700", color: "#1B2A5C" }}>{pp.title}</span>
                    </span>
                    {" "}
                    <span style={css(pp.statusPill)}>{pp.statusText}</span>
                  </div>
                  <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#3E4A63" }}>{pp.summary}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {(pp.steps || []).map((s, i) => (
                      <Fragment key={i}>
                        <span style={css(s.style)}>{s.label}</span>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                    {(pp.meta || []).map((m, i) => (
                      <Fragment key={i}>
                        <span style={{ padding: "10px 12px", borderRadius: "10px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "11px", fontWeight: "700", color: "#5A6478", textTransform: "uppercase", letterSpacing: "1px" }}>{m.k}</span>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#1B2A5C" }}>{m.v}</span>
                        </span>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {(pp.actions || []).map((ac, i) => (
                      <Fragment key={i}>
                        <button style={css(ac.style)} onClick={ac.run}>{ac.label}</button>
                      </Fragment>
                    ))}
                    <a href={pp.mail} style={{ minHeight: "44px", padding: "0 18px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "22px", background: view.orange, color: "#2B1A00", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 5h16v11H9l-5 4z" fill="none" stroke="#2B1A00" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                      Geef feedback
                    </a>
                  </div>
                </div>
              </Fragment>
            ))}
          </section>
          <section id="wijzigingslog" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Wijzigingslog</h2>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3E4A63" }}>Vastgestelde wijzigingen van de WoW, nieuwste bovenaan.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", borderLeft: "3px solid #D5DBE5", marginLeft: "8px" }}>
              {(view.wow.log || []).map((lg, i) => (
                <Fragment key={i}>
                  <div style={{ position: "relative", padding: "4px 0 18px 22px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={css(lg.dot)} />
                    {" "}
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#5A6478" }}>
                      {lg.version}{" · "}{lg.date}
                    </span>
                    {" "}
                    <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{lg.title}</span>
                    {" "}
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3E4A63" }}>{lg.text}</span>
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

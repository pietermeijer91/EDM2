import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor cflow (bovenaan, over de volle breedte). */
export default function ContinuousFlowTop({ view }) {
  return (
    <>
      {view.page.isCFLOW ? (
        <>
          <section id="flow-loop" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>De flow draait altijd</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
              Geen poortjes en fasen meer, maar een lus die niet stopt: ontdekken, specificeren, bouwen, valideren en releasen, steeds door mensen en agents samen. Wat we in productie leren, voedt de volgende ronde. Klik op een station voor het doel, de activiteiten en wie aan zet is.
            </p>
            <div style={{ padding: "24px", borderRadius: "18px", background: "#F4F2FA", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "460px", height: "460px", flexShrink: "0" }}>
                <svg style={{ position: "absolute", left: "0", top: "0" }} width="460" height="460" viewBox="0 0 460 460" aria-hidden="true">
                  <circle cx="230" cy="230" r="170" fill="none" stroke="#DCD3F0" strokeWidth="34" />
                  <circle cx="230" cy="230" r="170" fill="none" stroke={view.cflow.purple} strokeWidth="4" strokeDasharray="10 12" className="cf-dash" style={{ animationPlayState: view.play }} />
                </svg>
                <div className="cf-orbit" style={{ position: "absolute", inset: "0", animationPlayState: view.play }}>
                  {(view.cflow.tokens || []).map((tkn, i) => (
                    <Fragment key={i}>
                      <span className="cf-counter" style={css(tkn.style)}>{tkn.label}</span>
                    </Fragment>
                  ))}
                </div>
                <div style={{ position: "absolute", left: "50%", top: "50%", width: "170px", height: "170px", margin: "-85px 0 0 -85px", borderRadius: "50%", background: "#FFFFFF", border: "2px solid #DCD3F0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", textAlign: "center" }}>
                  <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4" fill="none" stroke={view.cflow.purple} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {" "}
                  <span style={{ fontSize: "18px", fontWeight: "800", color: "#2A1650" }}>Continu</span>
                  {" "}
                  <span style={{ fontSize: "12px", lineHeight: "1.35", color: "#5A4A7A" }}>
                    waarde voor
                    <br />
                    de klant
                  </span>
                </div>
                {(view.cflow.stations || []).map((st2, i) => (
                  <Fragment key={i}>
                    <button style={css(st2.style)} onClick={st2.pick} aria-pressed={st2.on}>
                      <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "1px", opacity: "0.8" }}>{st2.n}</span>
                      {" "}
                      <span style={{ fontSize: "17px", fontWeight: "800" }}>{st2.title}</span>
                      {" "}
                      <span style={{ fontSize: "11px", lineHeight: "1.3", opacity: "0.85" }}>{st2.sub}</span>
                    </button>
                  </Fragment>
                ))}
              </div>
              <div style={{ flex: "1 1 320px", maxWidth: "520px", padding: "22px", borderRadius: "16px", background: "#FFFFFF", border: `2px solid ${view.cflow.purple ?? ''}`, display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: view.cflow.purple }}>
                    {view.cflow.cur.kicker}
                  </span>
                  {" "}
                  <span style={{ padding: "4px 12px", borderRadius: "12px", background: "#F4F2FA", fontSize: "13px", fontWeight: "700", color: "#2A1650" }}>
                    {"Aan zet: "}{view.cflow.cur.owner}
                  </span>
                </div>
                <span style={{ fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>{view.cflow.cur.title}</span>
                {" "}
                <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#2E3A55" }}>{view.cflow.cur.goal}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>Wat gebeurt er?</span>
                  {(view.cflow.cur.acts || []).map((ca, i) => (
                    <Fragment key={i}>
                      <span style={{ display: "flex", gap: "8px", fontSize: "14px", lineHeight: "1.5", color: "#2E3A55" }}>
                        <span style={{ flexShrink: "0", width: "7px", height: "7px", marginTop: "7px", borderRadius: "50%", background: view.cflow.purple }} />
                        {ca}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <span style={{ padding: "10px 12px", borderRadius: "10px", background: "#F4F2FA", fontSize: "13px", lineHeight: "1.5", color: "#2A1650" }}>
                  <strong>Rol van AI:</strong>
                  {" "}{view.cflow.cur.ai}
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button style={{ minHeight: "42px", padding: "0 16px", border: "1.5px solid #D5DBE5", borderRadius: "10px", background: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "#1B2A5C" }} onClick={view.cflow.prev}>
                    ← Vorige
                  </button>
                  {" "}
                  <button style={{ minHeight: "42px", padding: "0 16px", border: "0", borderRadius: "10px", background: view.cflow.purple, cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", color: "#FFFFFF" }} onClick={view.cflow.next}>
                    Volgende →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}

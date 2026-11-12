import { Fragment } from 'react';
import { css } from '../lib/css.js';

/** Verrassing van het LACE: de vliegende Tesla met wagons. */
export default function LaceEasterEgg({ view }) {
  return (
    <>
      {view.laceOn ? (
        <>
          <div style={{ position: "fixed", inset: "0", zIndex: "50", background: "rgba(15,24,52,.6)", overflow: "hidden" }}>
            <div className="lace-train" style={{ position: "absolute", left: "0", top: "30%" }}>
              <div className="lace-float" style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px", animationPlayState: view.play }}>
                <span style={{ position: "absolute", left: "150px", right: "120px", top: "50%", height: "3px", marginTop: "-1px", background: "#00A6D6", boxShadow: "0 0 10px #00A6D6" }} />
                {" "}
                <span style={{ width: "150px", height: "6px", borderRadius: "3px", background: "linear-gradient(90deg, rgba(0,166,214,0), #00A6D6)", boxShadow: "0 0 12px #00A6D6" }} />
                {(view.laceCrew || []).map((m, i) => (
                  <Fragment key={i}>
                    <div style={css(m.wagon)}>
                      {m.adopted ? (
                        <>
                          <span style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "4px", padding: "2px 9px", borderRadius: "10px", background: "#F39200", color: "#2B1A00", fontSize: "10px", fontWeight: "800", whiteSpace: "nowrap" }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 21s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z" fill="#2B1A00" />
                            </svg>
                            geadopteerd
                          </span>
                        </>
                      ) : null}
                      <span style={css(m.avatar)}>{m.initial}</span>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{m.name}</span>
                      {" "}
                      <span style={{ position: "absolute", left: "12px", right: "12px", bottom: "-16px", height: "10px", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(0,166,214,.85), rgba(0,166,214,0) 70%)" }} />
                    </div>
                  </Fragment>
                ))}
                <svg width="176" height="96" viewBox="0 0 176 96" aria-hidden="true">
                  <ellipse cx="88" cy="88" rx="64" ry="6" fill="#00A6D6" opacity=".5" />
                  <path d="M8 60C10 46 30 42 52 40L74 24C82 18 92 16 104 17L122 19C134 21 144 30 152 40C160 42 168 48 168 56L166 64L10 66Z" fill="#EEF2F7" />
                  <path d="M78 26C86 20 96 19 106 20L120 22C128 24 136 32 142 40H70Z" fill="#1B2A5C" />
                  <path d="M97 21L99 40M118 23L114 40" stroke="#EEF2F7" strokeWidth="3" />
                  <path d="M10 58L168 54" stroke="#0072BC" strokeWidth="4" strokeLinecap="round" />
                  <path d="M160 46L172 45L168 51Z" fill="#F39200" />
                  <path d="M58 44l1.6 4.4L64 50l-4.4 1.6L58 56l-1.6-4.4L52 50l4.4-1.6z" fill="#F39200" />
                  <text x="24" y="50" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="800" fill="#1B2A5C">LACE</text>
                  <rect x="28" y="66" width="38" height="7" rx="3.5" fill="#00A6D6" />
                  <rect x="112" y="66" width="38" height="7" rx="3.5" fill="#00A6D6" />
                </svg>
              </div>
            </div>
            <div className="lace-card" style={{ position: "absolute", left: "50%", bottom: "7%", width: "min(580px, calc(100% - 32px))", padding: "24px 26px", boxSizing: "border-box", borderRadius: "18px", background: "#FFFFFF", borderTop: "6px solid #F39200", display: "flex", flexDirection: "column", gap: "12px", textAlign: "center" }}>
              <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#F39200" }}>
                Je hebt de LACE Express gevonden
              </span>
              {" "}
              <span style={{ fontSize: "24px", fontWeight: "800", color: "#1B2A5C" }}>Met dank aan het LACE</span>
              {" "}
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3E4A63" }}>
                Lean-Agile Center of Excellence: altijd vooruitstrevend, de motor achter het EDSN Delivery Model.
              </span>
              {" "}
              <span style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                {(view.laceCrew || []).map((m, i) => (
                  <Fragment key={i}>
                    <span style={css(m.chip)}>
                      {m.name}
                      {m.adopted ? (
                        <>
                          <span style={{ marginLeft: "6px", padding: "1px 7px", borderRadius: "8px", background: "rgba(255,255,255,.9)", color: "#7A4A00", fontSize: "10px", fontWeight: "800" }}>
                            geadopteerd
                          </span>
                        </>
                      ) : null}
                    </span>
                  </Fragment>
                ))}
              </span>
              {" "}
              <button style={{ alignSelf: "center", minHeight: "44px", padding: "0 22px", border: "0", borderRadius: "22px", background: "#1B2A5C", color: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "15px", fontWeight: "700" }} onClick={view.closeLace}>
                Volle kracht vooruit!
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

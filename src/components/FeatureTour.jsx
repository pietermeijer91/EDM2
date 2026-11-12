import { Fragment } from 'react';
import { css } from '../lib/css.js';

/** Concept WP-002 “Volg een Feature”: de tourkaart onderin beeld. */
export default function FeatureTour({ view }) {
  return (
    <>
      {view.tour.on ? (
        <>
          <div aria-hidden="true" style={{ height: "380px" }} />
          <aside role="dialog" aria-label="Volg een Feature" style={{ position: "fixed", left: "50%", bottom: "18px", transform: "translateX(-50%)", zIndex: "800", width: "min(700px, calc(100vw - 32px))", boxSizing: "border-box", padding: "18px 22px 18px", borderRadius: "18px", border: `2px solid ${view.orange ?? ''}`, background: "#FFFFFF", boxShadow: "0 18px 50px rgba(14, 26, 63, 0.35)", display: "flex", flexDirection: "column", gap: "10px", fontFamily: "Poppins, 'Segoe UI', sans-serif" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ padding: "3px 9px", borderRadius: "8px", background: view.orange, color: "#2B1A00", fontSize: "11px", fontWeight: "800", letterSpacing: "1px" }}>
                CONCEPT WP-002
              </span>
              {" "}
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#5A6478" }}>
                {"Volg een Feature · stap "}{view.tour.n}{" van "}{view.tour.total}
              </span>
              {" "}
              <button aria-label="Stop de tour" style={{ marginLeft: "auto", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", border: "0", borderRadius: "50%", background: "#EEF2F7", cursor: "pointer" }} onClick={view.tour.stop}>
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="#1B2A5C" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              {(view.tour.dots || []).map((dt, i) => (
                <Fragment key={i}>
                  <button aria-label={dt.label} style={css(dt.style)} onClick={dt.go} />
                </Fragment>
              ))}
            </div>
            <span style={{ fontSize: "22px", fontWeight: "700", color: "#1B2A5C" }}>{view.tour.cur.title}</span>
            {" "}
            <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#3E4A63" }}>{view.tour.cur.text}</span>
            {" "}
            <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#3E4A63" }}>
              <span style={{ padding: "3px 10px", borderRadius: "10px", background: "#EEF2F7", fontWeight: "700", color: "#1B2A5C" }}>Aan zet</span>
              {view.tour.cur.who}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
              <button style={{ minHeight: "42px", padding: "0 16px", border: "0", borderRadius: "21px", background: "none", color: "#0062A3", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", textDecoration: "underline" }} onClick={view.tour.read}>
                {"Lees meer over "}{view.tour.cur.name}
              </button>
              {" "}
              <span style={{ flex: "1" }} />
              {view.tour.hasPrev ? (
                <>
                  <button style={{ minHeight: "42px", padding: "0 18px", border: "1.5px solid #D5DBE5", borderRadius: "21px", background: "#FFFFFF", color: "#1B2A5C", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "700" }} onClick={view.tour.prev}>
                    ← Vorige
                  </button>
                </>
              ) : null}
              <button style={{ minHeight: "42px", padding: "0 20px", border: "0", borderRadius: "21px", background: view.navy, color: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "700" }} onClick={view.tour.next}>
                {view.tour.nextLabel}
              </button>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}

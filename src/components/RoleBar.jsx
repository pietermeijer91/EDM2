import { Fragment } from 'react';
import { css } from '../lib/css.js';

/** Concept WP-003 “Ik ben…”: rolkeuze en rolkaart boven de Big Picture. */
export default function RoleBar({ view }) {
  return (
    <>
      {view.rv.show ? (
        <>
          <section aria-label="Ik ben…" style={{ padding: "0 40px 20px", display: "flex", flexDirection: "column", gap: "12px", fontFamily: "Poppins, 'Segoe UI', sans-serif", zoom: view.uiZoom }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ padding: "4px 10px", borderRadius: "8px", background: view.orange, color: "#2B1A00", fontSize: "12px", fontWeight: "800", letterSpacing: "1px" }}>
                CONCEPT WP-003
              </span>
              {" "}
              <span style={{ margin: "0 6px 0 4px", fontSize: "20px", fontWeight: "700", color: "#1B2A5C" }}>Ik ben…</span>
              {(view.rv.chips || []).map((rc, i) => (
                <Fragment key={i}>
                  <button style={css(rc.style)} onClick={rc.pick} aria-pressed={rc.on}>{rc.label}</button>
                </Fragment>
              ))}
              <button style={{ marginLeft: "auto", minHeight: "40px", padding: "0 16px", border: "1.5px solid #D5DBE5", borderRadius: "20px", background: "#FFFFFF", color: "#1B2A5C", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "700" }} onClick={view.rv.close}>
                Sluit concept
              </button>
            </div>
            <div style={{ padding: "20px 22px", borderRadius: "16px", border: `2px solid ${view.orange ?? ''}`, background: "#FFF8EC", display: "grid", gridTemplateColumns: "minmax(0, 1.25fr) repeat(3, minmax(0, 1fr))", gap: "22px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", color: "#1B2A5C" }}>{view.rv.cur.heading}</span>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#3E4A63" }}>{view.rv.cur.intro}</span>
                {" "}
                <button style={{ alignSelf: "flex-start", marginTop: "4px", minHeight: "40px", padding: "0 16px", border: "0", borderRadius: "20px", background: view.navy, color: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "13px", fontWeight: "700" }} onClick={view.rv.cur.open}>
                  Lees meer over jouw rol →
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>
                  Jouw plekken in de plaat
                </span>
                {(view.rv.cur.spots || []).map((sp2, i) => (
                  <Fragment key={i}>
                    <button style={{ display: "flex", alignItems: "center", gap: "8px", padding: "2px 0", border: "0", background: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "#1B2A5C", textAlign: "left" }} onClick={sp2.open}>
                      <span style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", borderRadius: "50%", background: view.orange, color: "#2B1A00", fontSize: "12px", fontWeight: "800" }}>
                        {sp2.n}
                      </span>
                      {sp2.name}
                    </button>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>Jouw events</span>
                {(view.rv.cur.events || []).map((ev, i) => (
                  <Fragment key={i}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#1B2A5C" }}>
                      {"• "}{ev}
                    </span>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>Jouw artefacten</span>
                {(view.rv.cur.arts || []).map((ar, i) => (
                  <Fragment key={i}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#1B2A5C" }}>
                      {"• "}{ar}
                    </span>
                  </Fragment>
                ))}
                <span style={{ marginTop: "8px", fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#7A4A00" }}>
                  Jouw aanspreekpunt
                </span>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#1B2A5C" }}>{view.rv.cur.contact}</span>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}

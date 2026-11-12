import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor vpt (bovenaan, over de volle breedte). */
export default function FeatureKanbanTop({ view }) {
  return (
    <>
      {view.page.isVPT ? (
        <>
          <section id="bord" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Het Feature Kanban-bord in beweging</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
              Features stromen van idee naar Done. Klik op een kolom voor het doel, de activiteiten, het resultaat en wie verantwoordelijk is.
            </p>
            <div style={{ padding: "22px 16px", borderRadius: "16px", background: "#F4F6FA", overflowX: "auto" }}>
              <div style={{ position: "relative", width: "1114px", height: "214px", margin: "0 auto" }}>
                <span style={{ position: "absolute", left: "0", top: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", color: view.blue }}>
                  Flow to ready
                </span>
                {" "}
                <span style={{ position: "absolute", left: "560px", top: "0", fontSize: "12px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", color: view.blue }}>
                  Flow to done
                </span>
                {" "}
                <span style={{ position: "absolute", left: "551px", top: "24px", width: "2px", height: "190px", background: view.blue, opacity: ".35" }} />
                {(view.vpt.cols || []).map((cl, i) => (
                  <Fragment key={i}>
                    <div style={css(cl.box)} />
                    <button style={css(cl.head)} onClick={cl.pick} aria-pressed={cl.on}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px", width: "100%" }}>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1B2A5C", lineHeight: "1.2" }}>{cl.name}</span>
                        {cl.hasTag ? (
                          <>
                            <span className={cl.tagClass} style={css(cl.tagStyle)}>{cl.tag}</span>
                          </>
                        ) : null}
                      </span>
                      {" "}
                      <span style={css(cl.ownerStyle)}>{cl.owner}</span>
                    </button>
                    {" "}
                    <span style={css(cl.hint)}>{cl.hintText}</span>
                  </Fragment>
                ))}
                {(view.vpt.cards || []).map((cd, i) => (
                  <Fragment key={i}>
                    <span className="vpt-card" style={css(cd.style)}>
                      <span style={{ display: "block", width: "6px", height: "20px", borderRadius: "3px", background: cd.color }} />
                      {" "}{cd.label}{" "}
                      <span className="vpt-done" style={css(cd.done)}>✓</span>
                    </span>
                  </Fragment>
                ))}
              </div>
              <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", fontSize: "13px", color: "#3E4A63" }}>
                <span>
                  <strong style={{ color: "#1B2A5C" }}>WIP</strong>
                  {" "}= actief werk met een limiet
                </span>
                <span>
                  <strong style={{ color: "#1B2A5C" }}>DoR</strong>
                  {" "}= Definition of Ready
                </span>
                <span>
                  <strong style={{ color: "#1B2A5C" }}>DoD</strong>
                  {" "}= Definition of Done
                </span>
              </div>
            </div>
            <div style={css(view.vpt.step.panel)}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", color: view.blue }}>
                  {view.vpt.step.kicker}
                </span>
                {" "}
                <span style={{ padding: "4px 12px", borderRadius: "12px", background: "#FFFFFF", fontSize: "13px", fontWeight: "700", color: "#1B2A5C" }}>
                  {"Verantwoordelijke: "}{view.vpt.step.owner}
                </span>
              </div>
              <span style={{ fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>{view.vpt.step.title}</span>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr) minmax(0, 1fr)", gap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Doel</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#2E3A55" }}>{view.vpt.step.doel}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Activiteiten</span>
                  {(view.vpt.step.acts || []).map((a, i) => (
                    <Fragment key={i}>
                      <span style={{ display: "flex", gap: "8px", fontSize: "14px", lineHeight: "1.5", color: "#2E3A55" }}>
                        <span style={{ flexShrink: "0", width: "6px", height: "6px", marginTop: "8px", borderRadius: "50%", background: view.blue }} />
                        {a.text}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Resultaat</span>
                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#2E3A55" }}>{view.vpt.step.res}</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <button style={{ minHeight: "44px", padding: "0 16px", border: "1.5px solid #D5DBE5", borderRadius: "10px", background: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "#1B2A5C" }} onClick={view.vpt.prev}>
                  ‹ Vorige stap
                </button>
                {" "}
                <button style={{ minHeight: "44px", padding: "0 16px", border: "1.5px solid #D5DBE5", borderRadius: "10px", background: "#FFFFFF", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "#1B2A5C" }} onClick={view.vpt.next}>
                  Volgende stap ›
                </button>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}

import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor cflow. */
export default function ContinuousFlow({ view }) {
  return (
    <>
      {view.page.isCFLOW ? (
        <>
          <section id="flow-vs-vpt" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Van poortjes naar flow</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.7", color: "#2E3A55" }}>
              In Basis EDSN loopt een Feature via het VPT / Feature Kanban door vaste fasen met criteria per poort. In AI-Native EDSN gaan teams met agents zo snel, dat sturen per poort te traag wordt. De sturing verschuift naar een continue lus met een vast ritme om bij te sturen.
            </p>
            <div style={{ borderRadius: "14px", border: "1.5px solid #D5DBE5", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1fr) minmax(0, 1fr)", background: "#1B2A5C", color: "#FFFFFF", fontSize: "13px", fontWeight: "700" }}>
                <span style={{ padding: "12px 14px" }} />
                <span style={{ padding: "12px 14px" }}>Basis EDSN · VPT / Feature Kanban</span>
                <span style={{ padding: "12px 14px", background: view.cflow.purple }}>AI-Native EDSN · Continuous Flow</span>
              </div>
              {(view.cflow.cmp || []).map((cm, i) => (
                <Fragment key={i}>
                  <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1fr) minmax(0, 1fr)", borderTop: "1px solid #E1E6EE", fontSize: "14px", lineHeight: "1.5" }}>
                    <span style={{ padding: "12px 14px", fontWeight: "700", color: "#1B2A5C", background: "#F4F6FA" }}>{cm.a}</span>
                    <span style={{ padding: "12px 14px", color: "#3E4A63" }}>{cm.b}</span>
                    <span style={{ padding: "12px 14px", color: "#2A1650", background: "#FAF8FE" }}>{cm.c}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="flow-ritme" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>
              Continu, maar niet vrijblijvend: het ritme
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              {(view.cflow.ritme || []).map((rm, i) => (
                <Fragment key={i}>
                  <div style={css(rm.box)}>
                    <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", opacity: "0.85" }}>{rm.when}</span>
                    {" "}
                    <span style={{ fontSize: "18px", fontWeight: "700" }}>{rm.title}</span>
                    {" "}
                    <span style={{ fontSize: "13px", lineHeight: "1.55", opacity: "0.92" }}>{rm.text}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="flow-rollen" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Wie doet wat?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              {(view.cflow.roles || []).map((cr2, i) => (
                <Fragment key={i}>
                  <div style={{ padding: "16px", borderRadius: "14px", background: "#F4F6FA", borderTop: `4px solid ${view.cflow.purple ?? ''}`, display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{cr2.title}</span>
                    {" "}
                    <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#3E4A63" }}>{cr2.text}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="flow-vangrails" style={{ padding: "22px 24px", borderRadius: "16px", background: "#2A1650", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.25", fontWeight: "700", color: "#FFFFFF" }}>Vangrails voor een gezonde flow</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
              {(view.cflow.rails || []).map((rl, i) => (
                <Fragment key={i}>
                  <div style={{ padding: "14px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.18)", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: "#FFFFFF" }}>{rl.title}</span>
                    {" "}
                    <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#E4DAF7" }}>{rl.text}</span>
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

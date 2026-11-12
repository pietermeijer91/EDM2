import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor rolpagina’s (PM, SA, RTE, PD). */
export default function RolePage({ view }) {
  return (
    <>
      {view.page.isRole ? (
        <>
          <section id="oogopslag" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>De rol in één oogopslag</h2>
            <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ position: "relative", width: "340px", height: "340px", flexShrink: "0" }}>
                <svg style={{ position: "absolute", left: "0", top: "0" }} width="340" height="340" viewBox="0 0 340 340" aria-hidden="true">
                  <circle cx="170" cy="170" r="168" fill="#FFFFFF" stroke="#D5DBE5" strokeWidth="2" />
                  {(view.page.role.sectors || []).map((sc, i) => (
                    <Fragment key={i}>
                      <path d={sc.d} fill={sc.fill} stroke="#FFFFFF" strokeWidth="4" strokeLinejoin="round" />
                    </Fragment>
                  ))}
                </svg>
                {(view.page.role.wheel || []).map((w, i) => (
                  <Fragment key={i}>
                    <span style={css(w.box)}>
                      <span style={css(w.iconBox)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={w.icon} fill="none" stroke={w.stroke} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <span style={{ fontSize: "12px", fontWeight: "700", lineHeight: "1.25", color: "#1B2A5C" }}>{w.label}</span>
                    </span>
                  </Fragment>
                ))}
                <span style={{ position: "absolute", left: "110px", top: "110px", width: "120px", height: "120px", borderRadius: "50%", border: `3px solid ${view.page.role.color ?? ''}`, background: "#FFFFFF", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textAlign: "center" }}>
                  <span style={{ fontSize: "28px", fontWeight: "800", color: view.page.role.color }}>{view.page.role.abbr}</span>
                  {" "}
                  <span style={{ fontSize: "12px", fontWeight: "600", lineHeight: "1.2", color: "#1B2A5C", whiteSpace: "pre-line" }}>{view.page.role.fullBr}</span>
                </span>
              </div>
              <div style={{ flex: "1", minWidth: "280px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ alignSelf: "flex-start", padding: "4px 12px", borderRadius: "12px", background: view.page.role.tint, color: view.page.role.color, fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {view.page.role.theme}
                </span>
                <p style={{ margin: "0", fontSize: "26px", lineHeight: "1.3", fontWeight: "700", color: view.page.role.color }}>{view.page.role.kern}</p>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#2E3A55" }}>{view.page.role.intro}</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "18px" }}>
              <div style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>Doelen</span>
                {(view.page.role.doelen || []).map((d, i) => (
                  <Fragment key={i}>
                    <span style={{ fontSize: "16px", lineHeight: "1.55", color: "#2E3A55" }}>{d.text}</span>
                  </Fragment>
                ))}
              </div>
              <div style={{ padding: "22px 24px", border: `2px solid ${view.page.role.color ?? ''}`, borderRadius: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke={view.page.role.color} strokeWidth="1.8" />
                    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" stroke={view.page.role.color} strokeWidth="1.8" />
                    <path d="M12 9.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z" fill={view.page.role.color} />
                  </svg>
                  {" "}AI native mindset
                </span>
                {(view.page.role.ai || []).map((d, i) => (
                  <Fragment key={i}>
                    <span style={{ fontSize: "16px", lineHeight: "1.55", color: "#2E3A55" }}>{d.text}</span>
                  </Fragment>
                ))}
              </div>
            </div>
            <span style={{ fontSize: "14px", color: "#5A6478" }}>T4K: gezamenlijke verantwoordelijkheid voor de hele CDP</span>
          </section>
          <section id="verantwoordelijkheden" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Verantwoordelijkheden in de praktijk</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0, 1fr) 210px", gap: "20px", padding: "12px 18px", background: "#EEF2F7", borderRadius: "10px", fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>
                <span>Thema</span>
                <span>Kernactie</span>
                <span>Resultaat / werkproduct</span>
              </div>
              {(view.page.role.resp || []).map((r, i) => (
                <Fragment key={i}>
                  <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0, 1fr) 210px", gap: "20px", padding: "16px 18px", border: "1px solid #D5DBE5", borderRadius: "10px", alignItems: "start" }}>
                    <span style={{ fontSize: "16px", fontWeight: "700", lineHeight: "1.35", color: view.page.role.color }}>{r.t}</span>
                    {" "}
                    <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#2E3A55" }}>{r.a}</span>
                    {" "}
                    <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.4", color: view.page.role.color }}>{r.r}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </section>
          <section id="samenwerking" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Samenwerking en resultaat</h2>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)", gap: "18px" }}>
              <div style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>Meetgebieden</span>
                {(view.page.role.meet || []).map((m, i) => (
                  <Fragment key={i}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "16px", fontWeight: "700", color: view.page.role.color }}>{m.h}</span>
                      {" "}
                      <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#2E3A55" }}>{m.t}</span>
                    </span>
                  </Fragment>
                ))}
                <span style={{ fontSize: "13px", color: "#5A6478" }}>
                  {"Afstemming: "}{view.page.role.afst}
                </span>
              </div>
              <div style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>Samenwerking</span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "14px 10px", alignItems: "center", textAlign: "center" }}>
                  <span />
                  {" "}
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: view.page.role.color }}>{view.page.role.top.h}</span>
                    <span style={{ fontSize: "13px", lineHeight: "1.4", color: "#2E3A55" }}>{view.page.role.top.t}</span>
                  </span>
                  {" "}
                  <span />
                  {" "}
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: view.page.role.color }}>{view.page.role.left.h}</span>
                    <span style={{ fontSize: "13px", lineHeight: "1.4", color: "#2E3A55" }}>{view.page.role.left.t}</span>
                  </span>
                  {" "}
                  <span style={{ justifySelf: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "84px", height: "84px", borderRadius: "50%", background: view.page.role.tint, border: `2px solid ${view.page.role.color ?? ''}`, fontSize: "26px", fontWeight: "700", color: view.page.role.color }}>
                    {view.page.role.abbr}
                  </span>
                  {" "}
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: view.page.role.color }}>{view.page.role.right.h}</span>
                    <span style={{ fontSize: "13px", lineHeight: "1.4", color: "#2E3A55" }}>{view.page.role.right.t}</span>
                  </span>
                  {" "}
                  <span />
                  {" "}
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700", color: view.page.role.color }}>{view.page.role.bottom.h}</span>
                    <span style={{ fontSize: "13px", lineHeight: "1.4", color: "#2E3A55" }}>{view.page.role.bottom.t}</span>
                  </span>
                  {" "}
                  <span />
                </div>
              </div>
            </div>
            <div style={{ padding: "18px 22px", background: "#FFF4E3", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>Mandaatgrens</span>
              {" "}
              <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#2E3A55" }}>{view.page.role.mandaat}</span>
            </div>
          </section>
          <section id="kpis" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>KPI’s en ontwikkeling</h2>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)", gap: "18px", alignItems: "start" }}>
              <div style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>KPI’s</span>
                {(view.page.role.kpi || []).map((d, i) => (
                  <Fragment key={i}>
                    <span style={{ display: "flex", gap: "10px", fontSize: "15px", lineHeight: "1.5", color: "#2E3A55" }}>
                      <span style={{ flexShrink: "0", width: "6px", height: "6px", marginTop: "9px", borderRadius: "50%", background: view.page.role.color }} />
                      {d.text}
                    </span>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>Relatiebeheer</span>
                  {(view.page.role.relatie || []).map((d, i) => (
                    <Fragment key={i}>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#2E3A55" }}>{d.text}</span>
                    </Fragment>
                  ))}
                </div>
                <div style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>Ontwikkelmogelijkheden</span>
                  {(view.page.role.ontw || []).map((d, i) => (
                    <Fragment key={i}>
                      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#2E3A55" }}>{d.text}</span>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: "24px 28px", borderRadius: "14px", background: view.page.role.tint, display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "18px", fontWeight: "700", color: view.page.role.color }}>Strategische bijdrage</span>
              {" "}
              <span style={{ fontSize: "16px", lineHeight: "1.7", color: "#1B2A5C" }}>{view.page.role.strat}</span>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}

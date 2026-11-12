import { Fragment } from 'react';
import ContinuousFlowTop from './pages/ContinuousFlowTop.jsx';
import FeatureKanbanTop from './pages/FeatureKanbanTop.jsx';
import ContinuousFlow from './pages/ContinuousFlow.jsx';
import Lace from './pages/Lace.jsx';
import RolePage from './pages/RolePage.jsx';
import ConceptenWachtwoord from './pages/ConceptenWachtwoord.jsx';
import Concepten from './pages/Concepten.jsx';
import TactischVierkant from './pages/TactischVierkant.jsx';
import FeatureKanban from './pages/FeatureKanban.jsx';
import StoryPoints from './pages/StoryPoints.jsx';
import AiNativeArt from './pages/AiNativeArt.jsx';
import BusinessValue from './pages/BusinessValue.jsx';
import PeopleDeveloper from './pages/PeopleDeveloper.jsx';
import ArtDevelopment from './pages/ArtDevelopment.jsx';
import EngineeringEnablement from './pages/EngineeringEnablement.jsx';

/** Artikelpagina achter elk icoon: kop, samenvatting, secties, zijbalk en vorige/volgende. */
export default function Article({ view }) {
  return (
    <>
      {view.hasSel ? (
        <>
          <div style={{ width: "100%", background: "#FFFFFF", display: "flex", flexDirection: "column", zoom: view.uiZoom }}>
            <div style={{ height: "64px", flexShrink: "0", background: view.navy, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: "700", letterSpacing: "0.5px" }}>
                EDSN
                <span style={{ fontSize: "15px", fontWeight: "400", color: "#D5DEEE" }}>
                  {"· "}{view.t.title}{" Big Picture"}
                </span>
              </span>
              {" "}
              <button style={{ height: "44px", padding: "0 18px", display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.12)", color: "#FFFFFF", border: "0", borderRadius: "22px", cursor: "pointer", fontFamily: "inherit", fontSize: "15px", fontWeight: "600" }} onClick={view.close}>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M10 3 5 8l5 5" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {" "}Terug naar Big Picture
              </button>
            </div>
            <div>
              <div style={{ maxWidth: "1480px", margin: "0 auto", padding: "36px 40px 64px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#3E4A63" }}>
                    <button style={{ background: "none", border: "0", padding: "0", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", color: "#0062A3", textDecoration: "underline" }} onClick={view.close}>
                      Big Picture
                    </button>
                    {" "}
                    <span aria-hidden="true">›</span>
                    <span>{view.page.group}</span>
                    <span aria-hidden="true">›</span>
                    <span style={{ fontWeight: "600", color: "#1B2A5C" }}>{view.page.title}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ padding: "5px 12px", borderRadius: "14px", background: view.page.badgeBg, color: view.page.badgeFg, fontSize: "13px", fontWeight: "600" }}>
                      {view.t.title}
                    </span>
                    {" "}
                    <span style={{ fontSize: "13px", color: "#5A6478" }}>
                      {"Leestijd ± "}{view.page.minutes}{" min"}
                    </span>
                  </div>
                  <h1 style={{ margin: "0", fontSize: "52px", lineHeight: "1.1", fontWeight: "700", letterSpacing: "-1px", color: "#1B2A5C" }}>
                    {view.page.title}
                  </h1>
                  <div style={{ height: "6px", width: "120px", borderRadius: "3px", background: view.orange }} />
                </div>
                <ContinuousFlowTop view={view} />
                <FeatureKanbanTop view={view} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 56px", alignItems: "flex-start" }}>
                  <div style={{ flex: "999 1 600px", minWidth: "0", display: "flex", flexDirection: "column", gap: "30px" }}>
                    <section id="samenvatting" style={{ padding: "26px 30px", background: view.tintD, borderRadius: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <h2 style={{ margin: "0", fontSize: "15px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", color: "#0062A3" }}>
                        Samenvatting
                      </h2>
                      <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#1B2A5C" }}>{view.page.summary}</p>
                    </section>
                    {(view.page.sections || []).map((s, i) => (
                      <Fragment key={i}>
                        <section id={s.id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>{s.h}</h2>
                          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.75", color: "#2E3A55" }}>{s.p}</p>
                        </section>
                      </Fragment>
                    ))}
                    <ContinuousFlow view={view} />
                    <Lace view={view} />
                    <RolePage view={view} />
                    <ConceptenWachtwoord view={view} />
                    <Concepten view={view} />
                    <TactischVierkant view={view} />
                    <FeatureKanban view={view} />
                    <StoryPoints view={view} />
                    {view.page.hasCmp ? (
                      <>
                        <section id="vergelijking" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                          <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.25", fontWeight: "700", color: "#1B2A5C" }}>Output versus outcome</h2>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1fr) minmax(0, 1fr)", gap: "20px", padding: "12px 18px", background: "#EEF2F7", borderRadius: "10px", fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>
                              <span />
                              <span>Output-gedreven</span>
                              <span>Outcome-gedreven</span>
                            </div>
                            {(view.page.cmp || []).map((r, i) => (
                              <Fragment key={i}>
                                <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1fr) minmax(0, 1fr)", gap: "20px", padding: "14px 18px", border: "1px solid #D5DBE5", borderRadius: "10px", alignItems: "start" }}>
                                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{r.a}</span>
                                  {" "}
                                  <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#5A6478" }}>{r.b}</span>
                                  {" "}
                                  <span style={{ fontSize: "15px", lineHeight: "1.55", fontWeight: "600", color: "#1B2A5C" }}>{r.c}</span>
                                </div>
                              </Fragment>
                            ))}
                          </div>
                        </section>
                      </>
                    ) : null}
                    {view.page.hasEdsn ? (
                      <>
                        <section id="bij-edsn" style={{ padding: "24px 28px", borderRadius: "14px", background: view.navy, color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Bij EDSN</h2>
                          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#E6ECF5" }}>{view.page.edsn}</p>
                        </section>
                      </>
                    ) : null}
                  </div>
                  <div style={{ flex: "1 1 280px", maxWidth: "380px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <nav style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "10px" }} aria-label="In dit artikel">
                      <span style={{ fontSize: "15px", fontWeight: "700" }}>In dit artikel</span>
                      {(view.page.toc || []).map((s, i) => (
                        <Fragment key={i}>
                          <a href={`#${s.id ?? ''}`} style={{ fontSize: "15px", lineHeight: "1.4" }}>{s.h}</a>
                        </Fragment>
                      ))}
                    </nav>
                    <div style={{ padding: "22px 24px", background: "#FFF4E3", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "700" }}>Kernpunten</span>
                      {(view.page.keys || []).map((k, i) => (
                        <Fragment key={i}>
                          <span style={{ display: "flex", gap: "10px", fontSize: "15px", lineHeight: "1.5", color: "#2E3A55" }}>
                            <svg style={{ flexShrink: "0", marginTop: "3px" }} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                              <circle cx="8" cy="8" r="7" fill={view.orange} />
                              <path d="M4.8 8.2 7 10.4l4.2-4.6" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                            </svg>
                            {" "}{k.text}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                    <div style={{ padding: "22px 24px", border: "1px solid #D5DBE5", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "700", marginBottom: "4px" }}>Gerelateerd</span>
                      {(view.page.related || []).map((r, i) => (
                        <Fragment key={i}>
                          <button style={{ minHeight: "44px", padding: "0 12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", background: "#F1F4F8", border: "0", borderRadius: "10px", cursor: "pointer", fontFamily: "inherit", fontSize: "15px", fontWeight: "500", color: "#1B2A5C", textAlign: "left" }} onClick={r.pick}>
                            {r.title}{" "}
                            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M6 3l5 5-5 5" fill="none" stroke="#0062A3" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </button>
                        </Fragment>
                      ))}
                    </div>
                    <span style={{ fontSize: "13px", color: "#5A6478" }}>
                      {"Laatst bijgewerkt: "}{view.page.updated}{" · CIO Office"}
                    </span>
                  </div>
                </div>
                {/* ===== AI-Native ART ===== */}
                <AiNativeArt view={view} />
                {/* ===== Customer & Business Value ===== */}
                <BusinessValue view={view} />
                {/* ===== People Developer: people authority & people debt ===== */}
                <PeopleDeveloper view={view} />
                {/* ===== ART Development & Enablement: de people runway ===== */}
                <ArtDevelopment view={view} />
                <EngineeringEnablement view={view} />
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", paddingTop: "24px", borderTop: "1px solid #D5DBE5" }}>
                  <button style={{ minHeight: "64px", padding: "10px 20px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", background: "#FFFFFF", border: "1px solid #D5DBE5", borderRadius: "12px", cursor: "pointer", fontFamily: "inherit", color: "#1B2A5C" }} onClick={view.page.prev.pick}>
                    <span style={{ fontSize: "13px", color: "#5A6478" }}>‹ Vorige</span>
                    {" "}
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>{view.page.prev.title}</span>
                  </button>
                  {" "}
                  <button style={{ minHeight: "64px", padding: "10px 20px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px", background: "#FFFFFF", border: "1px solid #D5DBE5", borderRadius: "12px", cursor: "pointer", fontFamily: "inherit", color: "#1B2A5C" }} onClick={view.page.next.pick}>
                    <span style={{ fontSize: "13px", color: "#5A6478" }}>Volgende ›</span>
                    {" "}
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>{view.page.next.title}</span>
                  </button>
                </div>
                <span style={{ fontSize: "12px", color: "#5A6478" }}>
                  Interne toelichting van EDSN, gebaseerd op SAFe®. SAFe en Scaled Agile Framework zijn geregistreerde handelsmerken van Scaled Agile, Inc.
                </span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

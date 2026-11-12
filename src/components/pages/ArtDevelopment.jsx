import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor ade. */
export default function ArtDevelopment({ view }) {
  return (
    <>
      {view.page.isPR ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <div style={{ padding: "14px 18px", borderRadius: "10px", background: "#F4F6FA", fontSize: "13px", color: "#3E4A63" }}>
              De people runway is gebaseerd op de whitepaper{" "}
              <strong>‘The People Runway of the ART’</strong>
              {" "}(Just Leading Solutions, 2020), in eigen woorden vertaald naar de EDSN-situatie.
            </div>
            <section id="runway" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Twee runways onder de ART</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                De architectural runway zorgt dat de techniek klaarstaat voor de features van morgen. De people runway doet hetzelfde voor mensen: de gezamenlijke sterktes, vaardigheden en ervaring van de ART, en het vermogen om die optimaal in te zetten voor huidige én nieuwe initiatieven.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
                {(view.pr.runways || []).map((rw, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "20px 22px", borderRadius: "14px", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                        <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C" }}>{rw.title}</span>
                        <span style={css(rw.owner)}>{rw.who}</span>
                      </span>
                      {" "}
                      <svg width="100%" height="26" viewBox="0 0 600 26" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 13H600" stroke="#E3E7EE" strokeWidth="22" strokeLinecap="round" />
                        <path d={rw.path} fill="none" stroke={rw.color} strokeWidth="3.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </svg>
                      {" "}
                      <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#3E4A63" }}>{rw.text}</span>
                      {" "}
                      <span style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {(rw.items || []).map((it, i) => (
                          <Fragment key={i}>
                            <span style={css(rw.chip)}>{it.text}</span>
                          </Fragment>
                        ))}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="bouwstenen" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Zo bouw je een sterke people runway</h2>
              <div style={{ position: "relative", padding: "26px 22px 22px", borderRadius: "16px", background: "#F4F6FA" }}>
                <svg style={{ position: "absolute", left: "22px", right: "22px", top: "54px", width: "calc(100% - 44px)" }} height="24" viewBox="0 0 1000 24" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 12H1000" stroke="#E3E7EE" strokeWidth="20" strokeLinecap="round" />
                  <path d="M0 4 L50 20 L100 6 L150 19 L200 3 L250 21 L300 8 L350 17 L400 4 L450 20 L500 6 L550 18 L600 3 L650 21 L700 7 L750 19 L800 4 L850 20 L900 6 L950 18 L1000 5" fill="none" stroke="#C8102E" strokeWidth="3" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </svg>
                <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "12px" }}>
                  {(view.pr.practices || []).map((pc, i) => (
                    <Fragment key={i}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "56px", height: "56px", borderRadius: "50%", background: "#FFFFFF", border: "3px solid #C8102E" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={pc.icon} fill="none" stroke="#1B2A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {" "}
                        <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{pc.title}</span>
                        {" "}
                        <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{pc.text}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </section>
            <section id="strategisch-operationeel" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Strategisch en operationeel werk</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Een sterke people runway vraagt altijd werk op twee niveaus. Strategisch werk vernieuwt het systeem en wordt meestal op portfolio- of organisatieniveau gecoördineerd. Operationeel werk is het dagelijkse grondwerk op individu-, team- en ART-niveau, onder leiding van de People Developers.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1fr) minmax(0, 1fr)", gap: "14px", padding: "12px 18px", borderRadius: "10px", background: "#EEF2F7", fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>
                  <span>Domein</span>
                  <span style={{ color: "#4A2A5C" }}>Strategisch · transformerend</span>
                  <span style={{ color: "#00706D" }}>Operationeel · doorlopend</span>
                </div>
                {(view.pr.levels || []).map((lv, i) => (
                  <Fragment key={i}>
                    <div style={{ display: "grid", gridTemplateColumns: "170px minmax(0, 1fr) minmax(0, 1fr)", gap: "14px", padding: "14px 18px", borderRadius: "10px", border: "1px solid #D5DBE5", alignItems: "start" }}>
                      <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{lv.domain}</span>
                      {" "}
                      <span style={{ padding: "10px 12px", borderRadius: "8px", background: "#F4EEF5", fontSize: "13px", lineHeight: "1.5", color: "#2E2238" }}>
                        {lv.strat}
                      </span>
                      {" "}
                      <span style={{ padding: "10px 12px", borderRadius: "8px", background: "#E5F4F3", fontSize: "13px", lineHeight: "1.5", color: "#0E3533" }}>
                        {lv.oper}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
                <div style={{ padding: "18px 20px", borderRadius: "14px", background: "#F4EEF5", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#4A2A5C" }}>Voorbeelden van strategische initiatieven</span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {(view.pr.stratEx || []).map((x, i) => (
                      <Fragment key={i}>
                        <span style={{ padding: "5px 11px", borderRadius: "14px", background: "#FFFFFF", fontSize: "13px", fontWeight: "600", color: "#4A2A5C" }}>
                          {x.text}
                        </span>
                      </Fragment>
                    ))}
                  </span>
                </div>
                <div style={{ padding: "18px 20px", borderRadius: "14px", background: "#E5F4F3", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#00706D" }}>Voorbeelden van operationeel werk</span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {(view.pr.operEx || []).map((x, i) => (
                      <Fragment key={i}>
                        <span style={{ padding: "5px 11px", borderRadius: "14px", background: "#FFFFFF", fontSize: "13px", fontWeight: "600", color: "#00706D" }}>
                          {x.text}
                        </span>
                      </Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </section>
            <section id="procesopzet" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Wie doet wat: de procesopzet</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
                <div style={{ padding: "22px", borderRadius: "16px", background: "#F4EEF5", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                  <span style={{ alignSelf: "flex-start", fontSize: "15px", fontWeight: "700", color: "#4A2A5C" }}>Strategische, systemische initiatieven</span>
                  {" "}
                  <span style={{ padding: "8px 16px", borderRadius: "20px", background: "#FFFFFF", border: "2px solid #8C6A9E", fontSize: "13px", fontWeight: "700", color: "#4A2A5C" }}>
                    Sponsor · Business Owners, LACE, HR-leiding
                  </span>
                  {" "}
                  <svg width="14" height="18" viewBox="0 0 14 18" aria-hidden="true">
                    <path d="M7 0v14M2 10l5 6 5-6" fill="none" stroke="#8C6A9E" strokeWidth="2" />
                  </svg>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ padding: "8px 12px", borderRadius: "12px", background: "#FFFFFF", fontSize: "12px", fontWeight: "600", color: "#4A2A5C" }}>
                      Agile coaches
                    </span>
                    {" "}
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "150px", height: "150px", borderRadius: "50%", background: "#6E4A7E", color: "#FFFFFF", textAlign: "center", fontSize: "14px", fontWeight: "700", lineHeight: "1.35", padding: "14px", boxSizing: "border-box" }}>
                      Levering · people authority, HR CoE, HR-team
                    </span>
                    {" "}
                    <span style={{ padding: "8px 12px", borderRadius: "12px", background: "#FFFFFF", fontSize: "12px", fontWeight: "600", color: "#4A2A5C" }}>
                      Interne / externe consultants
                    </span>
                  </div>
                  <span style={{ width: "100%", maxWidth: "460px", padding: "10px 14px", borderRadius: "0 0 40px 40px", background: "#FFFFFF", border: "2px solid #8C6A9E", borderTop: "0", textAlign: "center", fontSize: "13px", fontWeight: "700", color: "#4A2A5C" }}>
                    Ondersteuning · teams · T4K · HR CoE’s
                  </span>
                </div>
                <div style={{ padding: "22px", borderRadius: "16px", background: "#E5F4F3", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#00706D" }}>Operationeel, tactisch werk</span>
                  <div style={{ position: "relative", height: "290px" }}>
                    <svg style={{ position: "absolute", left: "50%", top: "50%", margin: "-110px 0 0 -110px" }} width="220" height="220" viewBox="0 0 220 220" aria-hidden="true">
                      <circle cx="110" cy="110" r="96" fill="none" stroke="#00A6A0" strokeWidth="2.5" strokeDasharray="10 8" />
                      <path d="M196 92l10 18 8-20" fill="none" stroke="#00A6A0" strokeWidth="2.5" />
                      <path d="M30 160l-12-16-6 22" fill="none" stroke="#00A6A0" strokeWidth="2.5" />
                    </svg>
                    {" "}
                    <span style={{ position: "absolute", left: "50%", top: "50%", margin: "-44px 0 0 -44px", width: "88px", height: "88px", borderRadius: "50%", background: "#FFFFFF", border: "3px solid #1B2A5C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                      <svg width="26" height="30" viewBox="0 0 22 26" aria-hidden="true">
                        <circle cx="11" cy="7" r="5" fill="#1B2A5C" />
                        <path d="M1 26v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5z" fill="#1B2A5C" />
                      </svg>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#1B2A5C" }}>Medewerker</span>
                    </span>
                    {" "}
                    <span style={{ position: "absolute", left: "50%", top: "0", marginLeft: "-70px", width: "140px", padding: "8px", borderRadius: "12px", background: "#A9BC2B", color: "#1F2604", textAlign: "center", fontSize: "13px", fontWeight: "700" }}>
                      People Developers
                      <br />
                      <span style={{ fontWeight: "500", fontSize: "11px" }}>in de lead</span>
                    </span>
                    {" "}
                    <span style={{ position: "absolute", left: "4%", bottom: "6px", width: "120px", padding: "8px", borderRadius: "12px", background: "#1B2A5C", color: "#FFFFFF", textAlign: "center", fontSize: "13px", fontWeight: "700" }}>
                      T4K
                      <br />
                      <span style={{ fontWeight: "500", fontSize: "11px" }}>PM · SA · RTE</span>
                    </span>
                    {" "}
                    <span style={{ position: "absolute", right: "4%", bottom: "6px", width: "120px", padding: "8px", borderRadius: "12px", background: "#0072BC", color: "#FFFFFF", textAlign: "center", fontSize: "13px", fontWeight: "700" }}>
                      HR
                      <br />
                      <span style={{ fontWeight: "500", fontSize: "11px" }}>
                        {"P&C, HRBP"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section id="investeren" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Opbouwen, bouwen en onderhouden</h2>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)", gap: "18px", alignItems: "stretch" }}>
                <div style={{ position: "relative", minHeight: "360px", padding: "10px 0" }}>
                  <div style={{ position: "absolute", left: "0", top: "10px", width: "58%", aspectRatio: "1", maxHeight: "340px", borderRadius: "50%", background: "rgba(140,106,158,.20)", border: "2px solid #8C6A9E" }} />
                  <div style={{ position: "absolute", right: "0", top: "10px", width: "58%", aspectRatio: "1", maxHeight: "340px", borderRadius: "50%", background: "rgba(0,166,160,.16)", border: "2px solid #00A6A0" }} />
                  <div style={{ position: "absolute", left: "6%", top: "60px", width: "36%", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#4A2A5C" }}>Strategisch</span>
                    {(view.pr.vennL || []).map((v, i) => (
                      <Fragment key={i}>
                        <span style={{ fontSize: "13px", lineHeight: "1.35", fontWeight: "600", color: "#2E2238" }}>{v.text}</span>
                      </Fragment>
                    ))}
                    <span style={{ fontSize: "12px", fontStyle: "italic", color: "#4A2A5C" }}>→ een sterk fundament vestigen</span>
                  </div>
                  <div style={{ position: "absolute", right: "6%", top: "60px", width: "36%", display: "flex", flexDirection: "column", gap: "8px", textAlign: "right" }}>
                    <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: "#00706D" }}>Operationeel</span>
                    {(view.pr.vennR || []).map((v, i) => (
                      <Fragment key={i}>
                        <span style={{ fontSize: "13px", lineHeight: "1.35", fontWeight: "600", color: "#0E3533" }}>{v.text}</span>
                      </Fragment>
                    ))}
                    <span style={{ fontSize: "12px", fontStyle: "italic", color: "#00706D" }}>de people runway bouwen en onderhouden ←</span>
                  </div>
                </div>
                <div style={{ padding: "18px 20px", borderRadius: "16px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Investeringsfocus door de tijd</span>
                  {" "}
                  <svg width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="none" role="img" aria-label="De verhouding tussen strategisch en operationeel werk schommelt door de tijd">
                    <path d="M0 175 C40 168 60 140 100 128 S160 118 190 108 S240 76 290 86 S350 102 400 92 S450 74 475 96 S520 64 560 42 L600 30 L600 0 L0 0Z" fill="#E9DFEC" />
                    <path d="M0 175 C40 168 60 140 100 128 S160 118 190 108 S240 76 290 86 S350 102 400 92 S450 74 475 96 S520 64 560 42 L600 30 L600 200 L0 200Z" fill="#CDEDEB" />
                    <path d="M0 175 C40 168 60 140 100 128 S160 118 190 108 S240 76 290 86 S350 102 400 92 S450 74 475 96 S520 64 560 42 L600 30" fill="none" stroke="#1B2A5C" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                  {" "}
                  <span style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "600" }}>
                    <span style={{ color: "#4A2A5C" }}>▲ strategisch, transformerend</span>
                    <span style={{ color: "#00706D" }}>operationeel, doorlopend ▼</span>
                  </span>
                  {" "}
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>
                    Beide niveaus blijven altijd nodig; de nadruk schommelt door de tijd. Nieuwe programma’s zonder capaciteit om ze te dragen werken niet, en losse experimenten zonder pad naar opschaling ook niet.
                  </span>
                </div>
              </div>
            </section>
            <section id="businesscase" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Waarom het loont</h2>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)", gap: "14px" }}>
                <div style={{ padding: "22px", borderRadius: "16px", background: view.navy, color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "44px", fontWeight: "800", lineHeight: "1" }}>+15–20</span>
                  {" "}
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>punten hogere eNPS</span>
                  {" "}
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#DCE3EF" }}>
                    bij agile eenheden met een eigen people authority, vergeleken met eenheden zonder (bevinding uit de whitepaper).
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                  {(view.pr.gains || []).map((g, i) => (
                    <Fragment key={i}>
                      <div style={{ padding: "16px", borderRadius: "12px", border: "1.5px solid #D5DBE5", display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", width: "38px", height: "38px", borderRadius: "10px", background: g.color }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={g.icon} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#1B2A5C" }}>{g.text}</span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}

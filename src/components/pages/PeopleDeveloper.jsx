import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor peopledev. */
export default function PeopleDeveloper({ view }) {
  return (
    <>
      {view.page.isPD ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            <div style={{ padding: "14px 18px", borderRadius: "10px", background: "#F4F6FA", fontSize: "13px", color: "#3E4A63" }}>
              De onderdelen hieronder zijn gebaseerd op de whitepaper{" "}
              <strong>‘The People Runway of the ART’</strong>
              {" "}(Just Leading Solutions, 2020), in eigen woorden vertaald naar de EDSN-situatie.
            </div>
            <section id="people-authority" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>De people authority: het vierde hoekpunt van het T4K</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Op een ART heeft elke leiderschapsrol een eigen autoriteit. Lange tijd had niemand mensen als eerste prioriteit. De People Developer vult dat gat: met een expliciet mandaat om mensen voorop te zetten. Daarmee wordt de triade een vierkant.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
                {(view.pr.authorities || []).map((au, i) => (
                  <Fragment key={i}>
                    <div style={css(au.box)}>
                      <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", opacity: ".85" }}>{au.kind}</span>
                      {" "}
                      <span style={{ fontSize: "34px", fontWeight: "800", lineHeight: "1" }}>{au.abbr}</span>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "700" }}>{au.role}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", opacity: ".92" }}>{au.focus}</span>
                      {au.isNew ? (
                        <>
                          <span style={{ alignSelf: "flex-start", marginTop: "4px", padding: "2px 10px", borderRadius: "10px", background: "#FFFFFF", color: "#3E4A00", fontSize: "11px", fontWeight: "800" }}>
                            ontbrak in de triade
                          </span>
                        </>
                      ) : null}
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                <div style={{ padding: "18px 20px", borderRadius: "12px", background: "#F1F4DC", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "30px", fontWeight: "800", color: "#5E6E0C" }}>1–3</span>
                  <span style={{ fontSize: "14px", color: "#1B2A5C" }}>People Developers per ART</span>
                </div>
                <div style={{ padding: "18px 20px", borderRadius: "12px", background: "#F1F4DC", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "30px", fontWeight: "800", color: "#5E6E0C" }}>20–40</span>
                  <span style={{ fontSize: "14px", color: "#1B2A5C" }}>mensen per People Developer</span>
                </div>
                <div style={{ padding: "18px 20px", borderRadius: "12px", background: "#F1F4DC", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "30px", fontWeight: "800", color: "#5E6E0C" }}>≠ SM</span>
                  <span style={{ fontSize: "14px", color: "#1B2A5C" }}>
                    Overlap met de Scrum Master in coaching, maar met een ander mandaat en een bredere reikwijdte (workforce, leren, talent over ART’s heen)
                  </span>
                </div>
              </div>
            </section>
            <section id="people-debt" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>People debt: de verborgen schuld</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Net als technical debt ontstaat people debt wanneer we op korte termijn kiezen voor snelheid en daarbij investeringen in mensen overslaan. Het staat op geen enkele balans, maar de rente loopt wel op.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.1fr)", gap: "14px", alignItems: "stretch" }}>
                <div style={{ padding: "20px", borderRadius: "14px", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" fill="none" stroke={view.blue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Technical debt
                  </span>
                  {" "}
                  <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#3E4A63" }}>
                    Snel opleveren zonder schone code, documentatie of tests. Later betaal je met herwerk.
                  </span>
                  {" "}
                  <span style={{ marginTop: "auto", padding: "8px 10px", borderRadius: "8px", background: "#EEF2F7", fontSize: "13px", fontWeight: "600", color: "#1B2A5C" }}>
                    Afgelost met enablers op de architectural runway
                  </span>
                </div>
                <div style={{ padding: "20px", borderRadius: "14px", border: "2px solid #A9BC2B", background: "#FAFBF0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M17 3a4 4 0 0 1 0 8M22 21v-1a6 6 0 0 0-4-5.6" fill="none" stroke="#5E6E0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    People debt
                  </span>
                  {" "}
                  <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#3E4A63" }}>
                    Te druk (of te afwijzend) om te investeren in ontwikkeling, teamdynamiek en een HR-aanpak die past bij agile werken.
                  </span>
                  {" "}
                  <span style={{ marginTop: "auto", padding: "8px 10px", borderRadius: "8px", background: "#F1F4DC", fontSize: "13px", fontWeight: "600", color: "#1B2A5C" }}>
                    Afgelost met people enablers op de people runway
                  </span>
                </div>
                <div style={{ padding: "20px", borderRadius: "14px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Onbetaalde people debt leidt tot…</span>
                  {(view.pr.spiral || []).map((sp, i) => (
                    <Fragment key={i}>
                      <span style={css(sp.bar)}>
                        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {sp.text}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ padding: "18px 20px", borderRadius: "14px", border: "1.5px dashed #C8102E", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>Herkenbare signalen van een people-debt-cultuur</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(view.pr.signs || []).map((sg, i) => (
                    <Fragment key={i}>
                      <span style={{ padding: "5px 12px", borderRadius: "14px", background: "#FCEBEE", color: "#8A0F23", fontSize: "13px", fontWeight: "600" }}>
                        {sg.text}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
            </section>
            <section id="capaciteit" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Capaciteitsallocatie: ruimte voor people enablers</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Weeg je één people-onderwerp af tegen één feature, dan verliest het people-onderwerp bijna altijd. Daarom spreekt het T4K vóór de PI-planning een vaste verdeling van capaciteit af, zodat ook people enablers een plek in de backlog krijgen.
              </p>
              <div style={{ padding: "22px", borderRadius: "16px", background: "#F4F6FA", display: "grid", gridTemplateColumns: "minmax(0, 2.4fr) minmax(0, 1fr) 120px", gap: "24px", alignItems: "center" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "10px" }}>
                  {(view.pr.alloc || []).map((al, i) => (
                    <Fragment key={i}>
                      <div style={{ padding: "14px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color: "#5A6478" }}>{al.kind}</span>
                        {" "}
                        <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>{al.role}</span>
                        {" "}
                        <span style={{ fontSize: "12px", lineHeight: "1.45", color: "#3E4A63", minHeight: "52px" }}>{al.promise}</span>
                        {(al.items || []).map((it, i) => (
                          <Fragment key={i}>
                            <span style={css(al.chip)}>{al.item}</span>
                          </Fragment>
                        ))}
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                  <svg width="170" height="170" viewBox="0 0 160 160" role="img" aria-label="Voorbeeld capaciteitsverdeling">
                    {(view.pr.donut || []).map((d, i) => (
                      <Fragment key={i}>
                        <circle cx="80" cy="80" r="58" fill="none" stroke={d.color} strokeWidth="26" strokeDasharray={d.dash} strokeDashoffset={d.off} transform="rotate(-90 80 80)" />
                      </Fragment>
                    ))}
                    <text x="80" y="76" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="600" fill="#3E4A63">voorbeeld</text>
                    <text x="80" y="94" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="13" fontWeight="700" fill="#1B2A5C">verdeling</text>
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {(view.pr.donut || []).map((d, i) => (
                      <Fragment key={i}>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#1B2A5C" }}>
                          <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: d.color }} />
                          {d.pct}{"% "}{d.label}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "10px", borderRadius: "10px", background: "#FFFFFF", border: "1.5px solid #D5DBE5" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#5A6478", textAlign: "center" }}>ART-backlog</span>
                  {(view.pr.backlog || []).map((b, i) => (
                    <Fragment key={i}>
                      <span style={css(b)} />
                    </Fragment>
                  ))}
                </div>
              </div>
            </section>
            <section id="pd-verantwoordelijkheden" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Kernverantwoordelijkheden van de people authority</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
                {(view.pr.resp || []).map((r, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "16px", borderRadius: "12px", border: "1.5px solid #D5DBE5", borderTop: "5px solid #A9BC2B", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "#F1F4DC" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={r.icon} fill="none" stroke="#5E6E0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <span style={{ fontSize: "14px", fontWeight: "600", lineHeight: "1.45", color: "#1B2A5C" }}>{r.text}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}

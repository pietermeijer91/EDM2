import { Fragment } from 'react';
import { css } from '../../lib/css.js';

/** Pagina-onderdeel voor art (AI-Native). */
export default function AiNativeArt({ view }) {
  return (
    <>
      {view.page.isAIART ? (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ padding: "18px 22px", borderRadius: "14px", background: view.navy, color: "#FFFFFF", display: "flex", alignItems: "center", gap: "16px" }}>
              <svg width="30" height="30" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M8 2l1.6 4.4L14 8l-4.4 1.6L8 14l-1.6-4.4L2 8l4.4-1.6zM15 12l.8 2.2L18 15l-2.2.8L15 18l-.8-2.2L12 15l2.2-.8z" fill={view.orange} />
              </svg>
              {" "}
              <span style={{ fontSize: "18px", fontWeight: "600", lineHeight: "1.45" }}>
                AI alleen verandert je organisatie niet. Het systeem waarin je AI inzet wel.
              </span>
            </div>
            <section id="zes-kenmerken" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", fontWeight: "700", color: "#1B2A5C" }}>Zes kenmerken van een effectieve AI-Native ART</h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Nu AI teams sneller laat leren en leveren, wordt de ART belangrijker: die zorgt voor afstemming, coördinatie, governance en verbetering, zodat al die snelheid optelt tot echte uitkomsten. Zes kenmerken versterken elkaar. Klik op een kenmerk om ernaartoe te springen.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                {(view.aiart.traits || []).map((tr, i) => (
                  <Fragment key={i}>
                    <a href={`#${tr.id ?? ''}`} style={css(tr.box)}>
                      <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={css(tr.num)}>{tr.n}</span>
                        <span style={css(tr.iconBox)}>
                          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={tr.icon} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </span>
                      {" "}
                      <span style={{ fontSize: "17px", fontWeight: "700", color: "#1B2A5C" }}>{tr.title}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{tr.text}</span>
                    </a>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="k1" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>
                <span style={{ color: view.orange }}>1.</span>
                {" "}Georganiseerd rond producten
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Een AI-Native ART bundelt teams rond één product of een groep samenhangende producten: intern (waar de organisatie zelf op draait) of extern (wat klanten afnemen). Dat geeft alle teams één scherpe focus, met duidelijke klanten, een heldere waardepropositie en meetbare uitkomsten.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: "14px" }}>
                <div style={{ padding: "20px", borderRadius: "14px", background: "#E8F4DA", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#2F4A0B" }}>Product te groot voor één ART? Denk in ‘outcome surfaces’</span>
                  {" "}
                  <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#1E3307" }}>
                    Deel het product zo op dat elk deel zelfstandig meetbare uitkomsten oplevert voor klant en organisatie. Bijvoorbeeld:
                  </span>
                  {" "}
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {(view.aiart.surfaces || []).map((x, i) => (
                      <Fragment key={i}>
                        <span style={{ padding: "6px 12px", borderRadius: "14px", background: "#FFFFFF", fontSize: "13px", fontWeight: "700", color: "#2F4A0B" }}>
                          {x.text}
                        </span>
                      </Fragment>
                    ))}
                  </span>
                </div>
                <div style={{ padding: "20px", borderRadius: "14px", background: "#FCEBEE", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#8A0F23" }}>Liever niet: rond een systeem, functie of project</span>
                  {" "}
                  <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#4A1019" }}>
                    De focus is dan te smal voor een heldere waardepropositie. En een ART rond een project wordt na afloop opgeheven: zo bouw je nooit blijvend klantbegrip en gezamenlijk leervermogen op.
                  </span>
                </div>
              </div>
            </section>
            <section id="k2" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>
                <span style={{ color: view.orange }}>2.</span>
                {" "}Outcome-gedreven
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Product Management vertaalt de productvisie naar ART-outcomes voor het komende jaar. Met PI- en teamoutcomes ontstaan kortere toezeggingen: samen vormen ze een{" "}
                <strong>outcome tree</strong>
                {" "}die strategie verbindt met het werk van teams. Teams verdelen hun capaciteit over die outcomes en kiezen de output die ze het meest dichterbij brengt.
              </p>
              <div style={{ padding: "22px", borderRadius: "16px", background: "#F4F6FA", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 30px minmax(0, 1fr) 30px minmax(0, 1fr)", gap: "8px", alignItems: "stretch" }}>
                {(view.aiart.tree || []).map((o, i) => (
                  <Fragment key={i}>
                    {o.isNode ? (
                      <>
                        <div style={css(o.box)}>
                          <span style={css(o.tag)}>{o.level}</span>
                          {" "}
                          <span style={{ fontSize: "15px", fontWeight: "700", lineHeight: "1.35", color: "#1B2A5C" }}>{o.text}</span>
                          {" "}
                          <span style={{ fontSize: "12px", lineHeight: "1.45", color: "#3E4A63" }}>{o.note}</span>
                        </div>
                      </>
                    ) : null}
                    {o.isArrow ? (
                      <>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="22" height="22" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M6 3l7 7-7 7" fill="none" stroke={view.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </>
                    ) : null}
                  </Fragment>
                ))}
              </div>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#3E4A63" }}>
                Doordat elk team weet hoe zijn eigen key result bijdraagt aan de PI-outcome, kan het tijdens de PI bijsturen op data: een experiment aanpassen, een feature stoppen die niets beweegt, of capaciteit verschuiven naar een kansrijkere aanpak. De ART zorgt dat al die lokale keuzes op één lijn blijven.
              </p>
            </section>
            <section id="k3" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>
                <span style={{ color: view.orange }}>3.</span>
                {" "}Gedreven door menselijke expertise en oordeel
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                AI helpt meer opties te verkennen en meer informatie te verwerken dan mensen alleen kunnen. Maar mensen brengen de product- en domeinkennis om die opties te beoordelen, en zij blijven verantwoordelijk voor de besluiten.
              </p>
              <div style={{ padding: "20px 22px", borderRadius: "16px", background: "#F4F6FA", display: "flex", alignItems: "center", gap: "22px", flexWrap: "wrap" }}>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "220px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: view.blue }}>
                    De motor van de ART
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C" }}>AI-Native Teams · 3–7 mensen</span>
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>
                    Elk teamlid versterkt met AI. Het team is eigenaar van zijn output én zijn outcomes, en moet dus begrijpen wat het goedkeurt.
                  </span>
                </span>
                {" "}
                <span style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(view.aiart.capabilities || []).map((c, i) => (
                    <Fragment key={i}>
                      <span style={css(c.pill)}>{c.text}</span>
                    </Fragment>
                  ))}
                </span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C", marginTop: "6px" }}>ART-leiderschap: het tempo bijhouden</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
                {(view.aiart.leaders || []).map((l, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "16px", borderRadius: "14px", border: "1.5px solid #D5DBE5", borderTop: `5px solid ${l.color ?? ''}`, display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{l.role}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{l.text}</span>
                      {" "}
                      <span style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "4px", padding: "10px", borderRadius: "8px", background: "#F4F6FA" }}>
                        <span style={{ fontSize: "12px", color: "#5A6478", textDecoration: "line-through" }}>{l.from}</span>
                        {" "}
                        <span style={{ fontSize: "12px", fontWeight: "700", color: "#1B2A5C" }}>
                          {"→ "}{l.to}
                        </span>
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "12px" }}>
                <div style={{ padding: "16px 18px", borderRadius: "14px", background: "#F1EBFB", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#3A1D6E" }}>AI Value Architects</span>
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#2E2238" }}>
                    Veel organisaties halen minder waarde uit AI dan verwacht. AI Value Architects zijn de ontbrekende schakel: een vaste rol op de ART die teams helpt AI effectief in te zetten, per team, per product of voor de hele ART.
                  </span>
                </div>
                <div style={{ padding: "16px 18px", borderRadius: "14px", background: "#F1F4DC", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#3E4A00" }}>Bij EDSN: het Tactisch vierkant</span>
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#2E3A10" }}>
                    Naast PM, SA en RTE heeft het EDSN-leiderschapsteam een People Developer. Samen met de Business Owners houden zij het tempo van leren en beslissen bij.
                  </span>
                </div>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C", marginTop: "6px" }}>Een mensgerichte AI-cultuur: drie hefbomen</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                {(view.aiart.culture || []).map((c, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "16px 18px", borderRadius: "14px", border: "1.5px solid #D5DBE5", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: view.orange, color: "#2B1A00", fontWeight: "800" }}>
                        {c.n}
                      </span>
                      {" "}
                      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{c.title}</span>
                        <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{c.text}</span>
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="k4" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>
                <span style={{ color: view.orange }}>4.</span>
                {" "}Snelle innovatie in balans met leren op cadans
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Teams werken in flow, op AI-snelheid. De ART brengt cadans met iteraties, PI’s en events. Hoe sneller teams gaan, hoe belangrijker dat ritme: lokale keuzes en afhankelijkheden stapelen zich op, en periodieke afstemming voorkomt dat het product uit koers raakt.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0, 1fr) minmax(0, 1fr)", gap: "14px", padding: "12px 18px", borderRadius: "10px", background: "#EEF2F7", fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>
                  <span>Ritme</span>
                  <span>Team</span>
                  <span>ART</span>
                </div>
                {(view.aiart.cadence || []).map((c, i) => (
                  <Fragment key={i}>
                    <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0, 1fr) minmax(0, 1fr)", gap: "14px", padding: "14px 18px", borderRadius: "10px", border: "1px solid #D5DBE5", alignItems: "start" }}>
                      <span style={css(c.tag)}>{c.rhythm}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#2E3A55" }}>{c.team}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.55", color: "#2E3A55" }}>{c.art}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C", marginTop: "6px" }}>ART-events, gefaciliteerd door de RTE</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                {(view.aiart.events || []).map((e, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "18px", borderRadius: "14px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", borderRadius: "50%", background: "#FFF1DA", border: `2.5px solid ${view.orange ?? ''}` }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                            <path d={e.icon} fill="none" stroke="#1B2A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{e.title}</span>
                      </span>
                      {" "}
                      <span style={{ fontSize: "12px", fontWeight: "700", color: view.blue }}>{e.when}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{e.text}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C", marginTop: "6px" }}>Collectief leren: drie soorten</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                {(view.aiart.learning || []).map((lr, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "18px", borderRadius: "14px", border: "1.5px solid #D5DBE5", borderTop: `5px solid ${lr.color ?? ''}`, display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ fontSize: "16px", fontWeight: "700", color: "#1B2A5C" }}>{lr.title}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{lr.text}</span>
                      {" "}
                      <span style={{ marginTop: "auto", padding: "10px 12px", borderRadius: "8px", background: "#F4F6FA", fontSize: "12px", lineHeight: "1.5", color: "#1B2A5C" }}>
                        <strong>Voorbeeld:</strong>
                        {" "}{lr.ex}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </section>
            <section id="k5" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>
                <span style={{ color: view.orange }}>5.</span>
                {" "}Gedeelde AI-workflows en platformen optimaliseren
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                De{" "}
                <strong>AI Innovation Pipeline (AIIP)</strong>
                {" "}geeft één samenhangend geheel van gedeelde platformen, gecureerde data en voorzieningen over de hele productlevenscyclus. Teams profiteren van verbeterde workflows zonder hetzelfde probleem steeds lokaal op te lossen.
              </p>
              <div style={{ padding: "22px", borderRadius: "16px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "8px" }}>
                  {(view.aiart.phases || []).map((ph, i) => (
                    <Fragment key={i}>
                      <span style={css(ph.style)}>{ph.name}</span>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(view.aiart.aiip || []).map((x, i) => (
                    <Fragment key={i}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "14px", background: "#FFFFFF", border: "1.5px solid #D5DBE5", fontSize: "13px", fontWeight: "600", color: "#1B2A5C" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: view.blue }} />
                        {x.text}
                      </span>
                    </Fragment>
                  ))}
                </div>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C", marginTop: "6px" }}>Drie pijlers: intentie, specificaties en context</span>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                {(view.aiart.pillars || []).map((p, i) => (
                  <Fragment key={i}>
                    <div style={css(p.box)}>
                      <span style={{ fontSize: "30px", fontWeight: "800", lineHeight: "1" }}>{p.q}</span>
                      {" "}
                      <span style={{ fontSize: "17px", fontWeight: "700" }}>{p.title}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", opacity: ".92" }}>{p.text}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#3E4A63" }}>
                Zonder deze drie werkt AI in het luchtledige en levert het irrelevante of verzonnen resultaten op. Expliciet gemaakt vormen ze de gedeelde basis waarop een ART redeneert, of de volgende beslissing nu door een mens of door een agent wordt genomen.
              </p>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C", marginTop: "6px" }}>Van lokale innovatie naar gedeelde standaard</span>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 26px minmax(0, 1fr) 26px minmax(0, 1fr) 26px minmax(0, 1fr)", gap: "6px", alignItems: "stretch" }}>
                {(view.aiart.promote || []).map((s, i) => (
                  <Fragment key={i}>
                    {s.isStep ? (
                      <>
                        <div style={{ padding: "14px", borderRadius: "12px", background: "#FFFFFF", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "800", color: s.color }}>{s.who}</span>
                          <span style={{ fontSize: "13px", lineHeight: "1.45", color: "#1B2A5C" }}>{s.text}</span>
                        </div>
                      </>
                    ) : null}
                    {s.isArrow ? (
                      <>
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M6 3l7 7-7 7" fill="none" stroke={view.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </>
                    ) : null}
                  </Fragment>
                ))}
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#1B2A5C", marginTop: "6px" }}>Elk team een eigen werkmix</span>
              <div style={{ padding: "20px 22px", borderRadius: "16px", background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px", fontWeight: "600", color: "#3E4A63" }}>
                  {(view.aiart.mixLegend || []).map((lg, i) => (
                    <Fragment key={i}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: lg.color }} />
                        {lg.label}
                      </span>
                    </Fragment>
                  ))}
                  <span style={{ marginLeft: "auto", fontStyle: "italic" }}>voorbeeld</span>
                </span>
                {(view.aiart.mix || []).map((m, i) => (
                  <Fragment key={i}>
                    <div style={{ display: "grid", gridTemplateColumns: "230px minmax(0, 1fr)", gap: "14px", alignItems: "center" }}>
                      <span style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "14px", fontWeight: "700", color: "#1B2A5C" }}>{m.name}</span>
                        <span style={{ fontSize: "12px", color: "#5A6478" }}>{m.kind}</span>
                      </span>
                      {" "}
                      <span style={{ display: "flex", height: "26px", borderRadius: "6px", overflow: "hidden" }}>
                        {(m.parts || []).map((pt, i) => (
                          <Fragment key={i}>
                            <span style={css(pt)} />
                          </Fragment>
                        ))}
                      </span>
                    </div>
                  </Fragment>
                ))}
                <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>
                  Een prototype verkent een mogelijkheid, een experiment toetst een hypothese, een feature levert klantdata op en een enabler laat zien of een technische investering werkt. Het ART-leiderschap zoekt in al dat bewijs naar patronen die geen enkel team alleen ziet.
                </span>
              </div>
            </section>
            <section id="k6" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700", color: "#1B2A5C" }}>
                <span style={{ color: view.orange }}>6.</span>
                {" "}AI-governance en ethiek borgen
              </h2>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3E4A63" }}>
                Naast het coördineren van werk heeft de ART er in het AI-tijdperk een taak bij. Ongecontroleerde AI brengt juridische, data- en ethische risico’s met zich mee. Dat kun je niet bij de teams neerleggen: het vraagt om centrale standaarden waarbinnen teams werken.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                <div style={{ padding: "16px 18px", borderRadius: "14px", background: view.navy, color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: view.orange }}>
                    Verantwoordelijkheid 1
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                    Zorgen voor kennis van, en naleving van, de AI-governance, ethische richtlijnen en guardrails van het portfolio.
                  </span>
                </div>
                <div style={{ padding: "16px 18px", borderRadius: "14px", background: view.navy, color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase", color: view.orange }}>
                    Verantwoordelijkheid 2
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                    Aanvullende richtlijnen en guardrails vastleggen die specifiek zijn voor de producten en de context van de ART.
                  </span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
                {(view.aiart.gov || []).map((g, i) => (
                  <Fragment key={i}>
                    <div style={{ padding: "16px", borderRadius: "14px", border: "1.5px solid #D5DBE5", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "12px", background: g.color }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={g.icon} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "700", color: "#1B2A5C" }}>{g.title}</span>
                      {" "}
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#3E4A63" }}>{g.text}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ padding: "14px 18px", borderRadius: "12px", border: "2px solid #C8102E", background: "#FCEBEE", display: "flex", alignItems: "center", gap: "12px" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l10 18H2zM12 10v5M12 18h.01" fill="none" stroke="#C8102E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A1019" }}>
                  <strong>Soms betekent governance: stoppen.</strong>
                  {" "}Is het bewijs onvolledig of het risico groter dan afgesproken, dan gaat een deployment niet door. Werk dat het vertrouwen van klanten kan schaden, stopt. Heldere standaarden zorgen er tegelijk voor dat besluiten met een laag risico geen onnodige vertraging krijgen.
                </span>
              </div>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}

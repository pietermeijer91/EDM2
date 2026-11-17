/**
 * AI-Native aanvulling op de T4K-rolpagina's (PM, SA, RTE).
 * Alleen zichtbaar in AI-Native EDSN, onder de bestaande rolbeschrijving.
 *
 * voorNa:  [vandaag, AI-Native]
 * mens:    wat de rol zelf blijft doen (oordeel, besluit, gesprek)
 * agent:   wat een agent mag voorbereiden of versnellen
 * stages:  rol per pipelinestap: 'lead' (aan zet), 'support' (draagt bij) of null
 * va:      samenwerking met de AI Value Architect
 * vraag:   open vraag voor 'Bij EDSN'
 */
export const AI_ROLES = {
  pm: {
    voorNa: [
      ['Prioriteren op onderbuikgevoel of op wie het hardst roept', 'Prioriteren op bewijs: kleine experimenten en gebruiksdata laten zien wat waarde heeft'],
      ['Eén grote feature per PI uitwerken', 'Meerdere opties tegelijk verkennen en snel prototypen. De beste gaat door.'],
      ['AI als losse feature op de roadmap', 'AI als manier om de klantvraag beter of goedkoper te beantwoorden, vanaf de start meegewogen'],
    ],
    mens: ['Bepaalt de beoogde uitkomst en wat ‘goed genoeg’ is', 'Kiest tussen opties en neemt het prioriteringsbesluit', 'Voert het gesprek met klanten en Business Owners'],
    agent: ['Bundelt klantfeedback, incidenten en gebruiksdata tot thema’s', 'Maakt een eerste opzet van feature-hypotheses en acceptatiecriteria', 'Bouwt een klikbaar prototype om een idee snel te toetsen'],
    stages: {
      discover: ['lead', 'Eigenaar van de intentie: welk probleem, welke uitkomst?'],
      specify: ['support', 'Bewaakt dat de specificatie de uitkomst dient'],
      build: null,
      validate: ['lead', 'Beslist of de output de beoogde waarde levert'],
      release: ['support', 'Volgt adoptie en waarde na livegang'],
    },
    va: 'De PM is bij een AI-initiatief vaak de Champion of de Decision Maker. De Value Architect helpt de waarde scherp te krijgen met de Alignment Brief en het Value Blueprint, en zorgt dat eerst benut wordt wat er al is. Het besluit blijft bij de PM.',
    vraag: 'Welke klantdata en feedback mag een agent bij EDSN gebruiken, en waar staat die?',
  },
  sa: {
    voorNa: [
      ['Architectuur voor code die mensen schrijven', 'Architectuur voor een oplossing waarin ook agents, modellen en data een vaste plek hebben'],
      ['Kaders in documenten, getoetst in reviews achteraf', 'Kaders ingebouwd in pipeline en platform: guardrails die automatisch gelden'],
      ['Elk team kiest zijn eigen AI-tools', 'Gedeelde, beheerde bouwstenen voor modellen, prompts en agents'],
    ],
    mens: ['Bepaalt de technische koers en de grenzen waarbinnen agents werken', 'Beoordeelt architectuurbesluiten en afwijkingen', 'Blijft verantwoordelijk voor veiligheid en herstelbaarheid'],
    agent: ['Toetst wijzigingen aan NFR’s, standaarden en architectuurregels', 'Houdt Solution Intent en context actueel voor teams en andere agents', 'Signaleert technische schuld, afhankelijkheden en stijgende kosten'],
    stages: {
      discover: ['support', 'Toetst of opties technisch haalbaar zijn'],
      specify: ['lead', 'Legt context, NFR’s en ingebouwde kaders vast'],
      build: ['support', 'Bewaakt runway, integratie en gedeelde platforms'],
      validate: ['support', 'Toetst kwaliteit, security en herstelbaarheid'],
      release: ['support', 'Borgt observability en terugval'],
    },
    va: 'De SA beslist meestal over de technische randvoorwaarden van een AI-initiatief. De Value Architect brengt techniek, waarde en ethiek bij elkaar aan tafel. De SA bepaalt wat technisch kan en mag.',
    vraag: 'Welke AI-guardrails komen van Enterprise Architecture en de CISO, en welke bepaalt de ART zelf?',
  },
  rte: {
    voorNa: [
      ['Flow verbeteren op basis van retro’s en gevoel', 'Flow verbeteren op basis van data uit de pipeline: waar wacht werk, en waar helpt AI echt?'],
      ['Events organiseren en bewaken', 'Ruimte maken voor experimenten met AI in de werkwijze, en meten wat ze opleveren'],
      ['Belemmeringen escaleren zodra ze opvallen', 'Agents signaleren risico’s en afhankelijkheden vroeg. De RTE beslist wat ermee gebeurt.'],
    ],
    mens: ['Faciliteert PI Planning, ART Syncs en Inspect & Adapt', 'Weegt risico’s af en escaleert', 'Coacht Scrum Masters en teams in nieuwe werkwijzen'],
    agent: ['Vat syncs, risico’s en afhankelijkheden samen', 'Volgt flow metrics en signaleert opstoppingen', 'Bereidt het Go-Live-draaiboek en de readiness-check voor'],
    stages: {
      discover: null,
      specify: null,
      build: ['support', 'Houdt de flow tussen teams op gang'],
      validate: ['support', 'Bewaakt de gereedheid'],
      release: ['lead', 'Regisseert Go-Live, terugval en readiness'],
    },
    va: 'De RTE houdt de flow van de hele ART op gang. De Value Architect zorgt dat AI-initiatieven daarin echt waarde opleveren. Ze versterken elkaar, en een RTE kan de rol van Value Architect er ook bij vervullen.',
    vraag: 'Welke flow metrics halen we al uit de pipeline, en welke willen we erbij?',
  },
};

export const AI_ROLE_TOC = [
  ['ai-voor-na', 'Wat verandert er met AI'],
  ['ai-mens-agent', 'Mens en agent'],
  ['ai-pipeline', 'In de pipeline'],
  ['ai-va', 'Met de Value Architect'],
  ['ai-edsn', 'Bij EDSN'],
];
